import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ContactSection from "@/components/contact/ContactSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legend OSA consultants Contact Page",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Contact" />
        <ContactSection innerPage />
      </InnerLayout>
    </main>
  );
}
