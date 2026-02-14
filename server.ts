import * as remixBuild from "virtual:react-router/server-build"; // Virtual entry point for the app
import { storefrontRedirect } from "@shopify/hydrogen";
import { createRequestHandler } from "@shopify/hydrogen/oxygen";
import { createHydrogenRouterContext } from "~/.server/context";

/**
 * Export a fetch handler in module format.
 */
export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const hydrogenContext = await createHydrogenRouterContext(
        request,
        env,
        executionContext,
      );

      /**
       * Create a Remix request handler and pass
       */
      const importedBuild = (remixBuild as any).default ?? remixBuild;

      console.log('Build keys:', Object.keys(importedBuild));
      console.log('Build future:', importedBuild.future);

      const build = {
        ...importedBuild,
        publicPath: importedBuild.publicPath ?? "/build/",
        assetsBuildDirectory:
          importedBuild.assetsBuildDirectory ?? "dist/client",
        lastFuture: (importedBuild.future || {}),
        future: {
          ...(importedBuild.future || {}),
          v3_singleFetch: false,
        },
      };

      const handleRequest = createRequestHandler({
        build: build as any,
        mode: process.env.NODE_ENV,
        getLoadContext: () => hydrogenContext,
      });

      const response = await handleRequest(request);

      if (hydrogenContext.session.isPending) {
        response.headers.set(
          "Set-Cookie",
          await hydrogenContext.session.commit(),
        );
      }

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from the app.
         * If the redirect doesn't exist, then `storefrontRedirect`
         * will pass through the 404 response.
         */
        return storefrontRedirect({
          request,
          response,
          storefront: hydrogenContext.storefront,
        });
      }

      return response;
    } catch (error) {
      console.error(error);
      return new Response("An unexpected error occurred", { status: 500 });
    }
  },
};
