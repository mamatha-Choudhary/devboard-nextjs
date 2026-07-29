interface ProjectDescriptionProps {
  description?: string;
}

/** Renders the project description when one exists. */
export const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  if (!description) {
    return null;
  }

  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Description</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};
