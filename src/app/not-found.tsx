import ErrorMain from "@/components/main/ErrorMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legend OSA consultants",
  description: "Developed by Shedrack Ogwuche",
};
export default function NotFound() {
  return <ErrorMain />;
}
