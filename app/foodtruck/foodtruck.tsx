import styles from "./page.module.css"

export default async function FoodTruckIframe() {
    return (
        <iframe className={styles.iframe} src="https://illini-media-company.github.io/food-truck-tracker/" />
    );
}