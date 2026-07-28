import { delay } from "../../../lib/delay";
import { projectsMock } from "../mocks/projects.mock";
import type { Project } from "../types/project";

/** Fetches the list of projects with a brief simulated network delay. */
export const getProjects = async (): Promise<Project[]> => {
  await delay(500);

  return projectsMock;
};
