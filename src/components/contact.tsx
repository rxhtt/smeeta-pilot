"use client"
import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "@src/constants"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/dist/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Contact = () => {

   useGSAP(() => {
      const h2split = new SplitText("#contact h2", {
         type: "words,chars",
      });
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#contact",
            start: "top center"
         },
         ease: "power1.inOut"
      });

      tl.from(h2split.words, {
         yPercent: 100,
         opacity: 0,
         stagger: 0.05,
      }).from("#contact h3, #contact p, .icons", {
         yPercent: 100,
         opacity: 0,
         stagger: 0.1,
      }).from("#f-right-leaf, #f-left-leaf", {
         yPercent: 100,
         opacity: 0,
         stagger: 0.1,
      });
   }, [])
   return (
      <footer id="contact">
         <Image width={100} height={100} src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
         <Image width={100} height={100} src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

         <div className="content">
            <h2>Project by SMEETA PANNAKAR</h2>

            <div>
               <h3>Student Details</h3>
               <p>USN: U02AJ23S0440</p>
               <p>Email: smithapannakar704@gmail.com</p>
               <p>Institution: Government First Grade College Dharwad</p>
            </div>


         </div>
      </footer>
   )
}