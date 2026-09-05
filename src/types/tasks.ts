export type TaskStatus = "pending" | "in-progress" | "done";

export type SprintId =
  | "sprint-01"
  | "sprint-02"
  | "sprint-03"
  | null;

export type Task = {
  id: string;
  title: string;
  description: string;
  points: number;
  status: TaskStatus;
  sprintId: SprintId;
  position: number;
};