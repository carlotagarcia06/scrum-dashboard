import type { Task } from "../types/tasks";

export const initialTasks: Task[] = [
  {
    id: "task-01",
    title: "Definir historias de usuario",
    description: "Documentar las necesidades principales del proyecto.",
    points: 5,
    status: "pending",
    sprintId: null,
    position: 1,
  },
  {
    id: "task-02",
    title: "Configurar repositorio",
    description: "Preparar GitHub y el flujo de ramas.",
    points: 3,
    status: "done",
    sprintId: null,
    position: 2,
  },
  {
    id: "task-03",
    title: "Crear estructura principal",
    description: "Construir la barra superior y el tablero.",
    points: 5,
    status: "in-progress",
    sprintId: "sprint-01",
    position: 1,
  },
  {
    id: "task-04",
    title: "Crear formulario de tareas",
    description: "Permitir la creación de nuevas tareas.",
    points: 3,
    status: "pending",
    sprintId: "sprint-02",
    position: 1,
  },
];