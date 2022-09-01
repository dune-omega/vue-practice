export interface Job {
  title: string;
  location: string;
  salary: number;
  id: string;
}

export type JobOrder = "title" | "location" | "salary" | "id";
