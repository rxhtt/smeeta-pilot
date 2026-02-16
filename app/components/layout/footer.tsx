import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { Image } from "@shopify/hydrogen";
import { useThemeSettings } from "@weaverse/hydrogen";
import { cva } from "class-variance-authority";
import { useFetcher } from "react-router";
import { Banner } from "~/components/banner";
import { Button } from "~/components/button";
import Link from "~/components/link";
import { useShopMenu } from "~/hooks/use-shop-menu";
import { cn } from "~/utils/cn";
import { CountrySelector } from "./country-selector";
import { FooterMenu } from "./menu/footer-menu";

const variants = cva("", {
  variants: {
    width: {
      full: "",
      stretch: "",
      fixed: "mx-auto max-w-(--page-width)",
    },
    padding: {
      full: "",
      stretch: "px-3 md:px-10 lg:px-16",
      fixed: "mx-auto px-3 md:px-4 lg:px-6",
    },
  },
});

export function Footer() {
  const { footerWidth } = useThemeSettings();

  return (
    <footer
      className={cn(
        "w-full bg-(--color-footer-bg) pt-9 text-(--color-footer-text) lg:pt-16",
        variants({ padding: footerWidth }),
      )}
    >
      <div
        className={cn(
          "h-full w-full space-y-12 pb-16",
          variants({ width: footerWidth }),
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-(--color-footer-text) lg:text-5xl uppercase">
              SMEETA PANNAKAR
            </h2>
            <div className="h-1.5 w-32 mx-auto bg-primary rounded-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl pt-8">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Student ID</h3>
              <p className="text-xl font-medium">U02AJ23S0440</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">College</h3>
              <p className="text-xl font-medium leading-tight">GOVERNMENT FIRST GRADE COLLEGE DHARWAD</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Stream</h3>
              <p className="text-xl font-medium">BCA (Final Year)</p>
            </div>
          </div>

          <div className="pt-8">
            <a href="mailto:smithapannakar704@gmail.com" className="group flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform">
              <span>Contact: smithapannakar704@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 lg:flex-row">
          <div className="flex items-center gap-4">
            <CountrySelector />
            <div className="h-4 w-px bg-white/20 hidden lg:block" />
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Smeeta Pannakar. Final Year Project.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-2 text-sm">
            <p className="font-semibold text-primary">Student Project: BCA | Government First Grade College, Dharwad</p>
            <p className="opacity-60">ID: U02AJ23S0440 | Email: smithapannakar704@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
