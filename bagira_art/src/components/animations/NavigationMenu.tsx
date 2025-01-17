"use client";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlipLink } from "./RevealLinks";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
};

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
};

const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};

const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

interface NavProps {
  links: LinkDetails[];
}

interface BodyProps {
  links: LinkDetails[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
}

interface FooterProps {}

interface ImageProps {
  src: string;
  isActive: boolean;
}

interface HeaderProps {
  navigation: LinkDetails[];
}

export const getChars = (word: string) => {
  let chars: JSX.Element[] = [];
  word.split("").forEach((char, i) => {
    chars.push(
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    );
  });
  return chars;
};

const Nav: React.FC<NavProps> = ({ links }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden flex flex-row items-start justify-end size-full text-white"
    >
      <div className="flex flex-col items-end justify-between size-full">
        <div className="flex flex-wrap mt-10 justify-end">
          {links.map((link, index) => (
            <Link key={`l_${index}`} href={link.href} passHref>
              <motion.p
                onMouseOver={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
                className="m-0 flex overflow-hidden large-text sm:text-[10vw] md:text-[3vw] pl-8 pt-2 font-light "
              >
                {getChars(link.title)}
              </motion.p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
      {links[selectedLink.index].src && (
        <div className="flex relative w-[30vw] h-[300px]">
          <ImageModal
            src={links[selectedLink.index].src || ""}
            isActive={selectedLink.isActive}
          />
        </div>
      )}
    </motion.div>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap mt-10 small-text uppercase gap-10 text-white">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <span className="font-extrabold mr-2">Made by:</span>{" "}
          @relaydigitalmktg
        </motion.li>
      </ul>
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <Link
            href="/privacy-policy"
            aria-label="Visit Privacy Policy Page"
            passHref
          >
            Privacy Policy
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <Link
            href="/terms"
            aria-label="Visit Terms and Conditions Page"
            passHref
          >
            Terms & Conditions
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

const ImageModal: React.FC<ImageProps> = ({ src, isActive }) => {
  return (
    <>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          className=" inset-0 -z-10"
        >
          <img
            src={`/img/${src}`}
            alt="Selected link image"
            className="size-full object-cover"
          />
        </motion.div>
      )}
    </>
  );
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <div
      id="header"
      className={`fixed top-0 champagne-limos z-[999] flex flex-col size-full h-auto p-8 text-white ${
        isActive ? "" : "mix-blend-differences"
      }`}
    >
      <div className="relative flex size-full items-center justify-between gap-10 text-xs">
        <div className="relative text-6xl uppercase font-extrabold max-w-[10vw]">
          {/* Bagira
            <AnimatePresence>
              <span className="text-sm">{getChars("art")}</span>

              <span className="absolute text-lg -bottom-[3px] font-light">
                {getChars("®")}
              </span>
            </AnimatePresence> */}
          <Link href={"/"} className="size-full" passHref>
            <img
              src="/images/BAGIRA_LOGO_WHITE.webp"
              alt="Loading"
              className=""
            />
          </Link>
        </div>
        <div
          className={`${
            isActive ? "opacity-0 pointer-events-none" : ""
          } hidden transition-all duration-1000 md:flex justify-between size-full max-w-[55vw]`}
        >
          {navigation.map((nav, index) => (
            <div
              key={index}
              className="text-sm font-normal text-white text-nowrap  transition-all duration-300 mx-4"
            >
              {/* <a href={nav.href}>{nav.title}</a> */}
              <Link key={`l_${index}`} href={nav.href} passHref>
                {/* <motion.p
                    onMouseOver={() =>
                      setSelectedLink({ isActive: true, index })
                    }
                    onMouseLeave={() =>
                      setSelectedLink({ isActive: false, index })
                    }
                    variants={blur}
                    animate={
                      selectedLink.isActive && selectedLink.index !== index
                        ? "open"
                        : "closed"
                    }
                    className="m-0 flex overflow-hidden font-light "
                  > */}
                <FlipLink>{getChars(nav.title)}</FlipLink>
                {/* </motion.p> */}
              </Link>
            </div>
          ))}
        </div>
        <div className="relative group hidden md:flex items-center justify-end bg-black border-2 border-black hover:bg-[#f9e0e1] rounded-full transition-all duration-300">
          {/* <a
              href="/contact"
              className="size-full px-5 py-[10px] capitalize group-hover:text-black transition-all duration-300"
            >
              Contact
            </a> */}
          <Link
            href={"/contact"}
            className="size-full px-5 py-1.5 capitalize group-hover:text-black transition-all duration-300"
            passHref
          >
            {getChars("Contact Us")}
          </Link>
        </div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="group flex md:hidden items-center justify-end gap-2 cursor-pointer"
        >
          <div className="relative flex flex-col items-center justify-center">
            <div
              className={`w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                isActive ? "rotate-45 translate-y-[0.175rem]" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transform transition duration-300 ease-in-out mt-1 ${
                isActive ? "-rotate-45 -translate-y-[0.175rem]" : ""
              }`}
            />
          </div>
          <div className="group-hover:translate-x-1 duration-300 relative flex flex-col items-start justify-center size-full small-text">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="absolute m-0"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className=" m-0"
            >
              Close
            </motion.p>
          </div>
        </div>
      </div>
      {/* <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="absolute bg-transparent backdrop-blur-lg opacity-50 size-full top-full left-0"
      /> */}
      <AnimatePresence>
        {isActive && <Nav links={navigation} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
