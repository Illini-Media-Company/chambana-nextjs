"use client";
import styles from "./banner.module.css";
import Link from "next/link";
import { BsThreeDots, BsX } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import { MenuItem } from "@/types/menuItem";
import { menuItems } from "@/app/menuItems";
import Image from "next/image";
import logo from "../public/CE_horiz.svg";
import logo_mobile from "../public/CE_horiz.svg";
import SearchBar from "./searchBar";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Banner() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className={styles.banner}>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className={styles.mobileMenuButton}
        >
          {!showMobileMenu && <TfiMenu size={30}/>}
          {showMobileMenu && <TfiClose size={30}/>}
        </div>
        <div className={styles.search}><SearchBar /></div>
      </div>
      {/*  todo: make this a link to the homepage */}
      <div className={styles.navBarContainer}>
        <a href={"/"}>
          <Image
            src={logo}
            alt={"Logo for the Daily Illini"}
            width={266.4}
            height={80}
            className={styles.logo}
          /> 
        </a>
        <a href={"/"}>
          <Image 
            src={logo_mobile}
            alt={"mobile logo for Chambana Eats"}
            width={333}
            height={100}
            className={styles.mobile_logo}
          />
        </a>
        <div className={styles.right}>
          <NavBar />

          <div className={styles.socials}>
            
            <a href={'https://www.instagram.com/chambana_eats/'} className={styles.anchor}>
              <IconContext.Provider value={{className: styles.icon}}>
                <FaInstagram size={25}/>
              </IconContext.Provider>
            </a>

            <a href={'https://www.tiktok.com/@chambana_eats?_d=secCgYIASAHKAESPgo8FzCqYeaEL%2FgRHBY3kJOdmU[…]fd9fd0c4b40beff802f38685551d987abfa&language=en&sec_uid=MS4wL'} className={styles.anchor}>
              <IconContext.Provider value={{className: styles.icon}}>
                <FaTiktok size={25} className={styles.icon_png}/>
              </IconContext.Provider>
            </a>

          </div>
        </div>
      </div>
      {showMobileMenu && <MobileMenu />}
    </>
  );
}

function NavBar() {
  return (
    <div className={styles.menuContainer}>
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <DesktopMenuItem key={index} item={item} />
        ))}
        <SearchBar />
      </nav>
    </div>
  );
}

interface DesktopMenuItemProps {
  item: MenuItem;
}
function DesktopMenuItem({ item }: DesktopMenuItemProps) {
  return (
    <Link href={item.href} target={item.newWindow ? "_blank" : "_self"}>
      {item.title}
    </Link>
  );
}
