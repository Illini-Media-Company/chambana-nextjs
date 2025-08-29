import { Metadata } from "next";
import FoodTruckIframe from "./foodtruck";

export const metadata: Metadata = {
  title: "Food Truck Tracker",
  description: "Check the location of all your favorite food trucks in Champaign-Urbana!",
};

export default function FoodTruckPage() {
  return <FoodTruckIframe/>;
}