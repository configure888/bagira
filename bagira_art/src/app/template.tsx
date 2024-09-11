"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Inner from "@/components/layout/transitions/inner";
import { usePathname } from "next/navigation";
// import Header from "@/components/animations/NavigationMenu";
import Header from "@/components/pages/S+T/Header";
import { NavLinks } from "@/data/navLinks";
// import Footer from "@/components/Footer";
import Footer from "@/components/pages/S+T/Footer";
import ProjectSection from "@/components/pages/S+T/ProjectSection";
import StickyFooter from "@/components/animations/StickyFooter";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import { CaseStudyProvider } from "@/contexts/CaseStudyContext";
import {
  slide,
  perspective,
  opacity,
  exitSlide,
} from "@/components/layout/transitions/transitions";

const MOBILE_BREAKPOINT = 1024;

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isEnter, setIsEnter] = useState(false);
  const [isExit, setIsExit] = useState(false);

  const isAdminPage = pathname.startsWith("/admin");

  useEffect(() => {
    let previousWidth = window.innerWidth;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      console.log("New width: " + newWidth);

      if (
        (previousWidth < MOBILE_BREAKPOINT && newWidth >= MOBILE_BREAKPOINT) ||
        (previousWidth >= MOBILE_BREAKPOINT && newWidth < MOBILE_BREAKPOINT)
      ) {
        console.log("Crossing breakpoint, reloading page...");
        window.location.reload();
      }

      previousWidth = newWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="template"
      className={`${!isAdminPage && "cursor-none"} relative size-full bg-bagiBlack`}
    >
      {/* <motion.div
        className="w-full h-full fixed left-0 top-0 bg-bagiBlack z-[9999999] cursor-wait"
        variants={slide}
        initial={slide.initial}
        exit={slide.exit}
        animate={slide.enter}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
      /> */}
      {/* <motion.div
        variants={perspective}
        initial={perspective.initial}
        exit={perspective.exit}
        animate={perspective.enter}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      > */}
      {/* <motion.div
          className="relative"
          variants={opacity}
          initial={opacity.initial}
          exit={opacity.exit}
          animate={opacity.enter}
          transition={{
            duration: 0.2,
          }}
        > */}
      {!isAdminPage ? (
        <>
          <motion.div
            className="w-full h-full fixed left-0 top-0 bg-[#0E0F11] z-[9999999] cursor-wait"
            variants={exitSlide}
            initial={exitSlide.initial}
            exit={exitSlide.exit}
            animate={exitSlide.enter}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          <div className="hidden md:block z-[99999999]">
            <CustomCursor />
          </div>
          <Header
            navigation={NavLinks}
            setIsEnter={setIsEnter}
            setIsExit={setIsExit}
          />
          <ProjectSection
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            isExit={isExit}
            setIsExit={setIsExit}
            isEnter={isEnter}
            setIsEnter={setIsEnter}
          />
          <SmoothScrolling>{children}</SmoothScrolling>
          <StickyFooter className="relative z-0" marginBottom={10}>
            <Footer setIsEnter={setIsEnter} setIsExit={setIsExit} />
          </StickyFooter>
        </>
      ) : (
        <>{children}</>
      )}
      {/* </motion.div> */}
      {/* </motion.div> */}
    </div>
  );
};

export default Template;
