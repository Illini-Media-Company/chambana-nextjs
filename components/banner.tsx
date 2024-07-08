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
import logo from "../public/logo.png";

export default function Banner() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className={styles.banner}>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className={styles.mobileMenuButton}
        >
          {!showMobileMenu && <TfiMenu />}
          {showMobileMenu && <TfiClose />}
        </div>
      </div>
      {/*  todo: make this a link to the homepage */}
      <div className={styles.navBarContainer}>
        <a href={"/"}>
          <Image
            src={logo}
            alt={"Logo for the Daily Illini"}
            width={100}
            height={100}
            className={styles.logo}
          /> 
        </a>
        <div className={styles.column + " " + styles.right}>
          <NavBar />
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
