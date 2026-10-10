import type { Metadata } from "next";
import { ServiceDetailView } from "@/components/services/service-detail";
import { servicesData } from "../services-data";

const service = servicesData.find((s) => s.slug === "irrigation-and-lighting")!;

export const metadata: Metadata = {
  title: service.label,
  description: service.metaDescription,
};

export default function Page() {
  return <ServiceDetailView service={service} />;
}
