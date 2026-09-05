import type { TaskStatus } from "../types/tasks";

type TaskCardProps = {
  title: string;
  description: string;
  points: number;
  status: TaskStatus;
  selected?: boolean;
};

const statusLabels: Record<TaskStatus, string> = {
  pending: "Pendiente",
  "in-progress": "En progreso",
  done: "Terminada",
};

export function TaskCard({
  title,
  description,
  points,
  status,
  selected = false,
}: TaskCardProps) {
  const className = selected
    ? "task-card task-card--selected"
    : "task-card";

  return (
    <button
      type="button"
      className={className}
      aria-pressed={selected}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <footer className="task-card-footer">
        <span>{points} PT</span>
        <span>{statusLabels[status]}</span>
      </footer>
    </button>
  );
}