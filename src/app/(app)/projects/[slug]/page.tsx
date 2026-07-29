import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/features/projects/components/ProjectDetails";
import { getProjectBySlug } from "@/features/projects/services/project.service";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.name} | DevBoard`,
    description: project.description ?? `Details for ${project.name}`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <ProjectDetails project={project} />
    </div>
  );
}
