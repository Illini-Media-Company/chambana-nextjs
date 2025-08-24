// This file overrides the global styling and removes the bodywrap from the Food Truck Tracker page

import { Baskervville } from "next/font/google";
import Banner from "@/components/banner";
import globalStyles from "../layout.module.css"
import styles from "./layout.module.css"
const bask = Baskervville({subsets: ["latin"], display: "swap", weight: "400"})

export default function FoodTruckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bask.className + " " + globalStyles.body}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={bask.className + " " + globalStyles.header}> 
                    <Banner />
                    <hr className={globalStyles.line}/> 
                </div>
            </div>
            <div className={styles.content}>
                {children} 
            </div>
        </div>
      </body>
    </html>
  )
}