import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import ProjectSection from "@/components/portfolio/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legend OSA consultants Projects Page",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main className="rv-14-body projects-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Projects" />
        <ProjectSection />
        <CtaSection inner />
      </InnerLayout>
    </main>
  );
}