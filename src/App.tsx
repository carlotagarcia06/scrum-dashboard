import "./App.css";
import { TopBar } from "./components/TopBar";
import { BoardColumn } from "./components/BoardColumn";
import { TaskCard } from "./components/TaskCard";
import { initialTasks } from "./data/tasks";
import type { SprintId } from "./types/tasks";

function App() {
  function renderTasks(sprintId: SprintId) {
    const tasksForSprint = initialTasks
      .filter((task) => task.sprintId === sprintId)
      .sort((firstTask, secondTask) => {
        return firstTask.position - secondTask.position;
      });

    if (tasksForSprint.length === 0) {
      return null;
    }

    return tasksForSprint.map((task) => (
      <TaskCard
        key={task.id}
        title={task.title}
        description={task.description}
        points={task.points}
        status={task.status}
        selected={task.id === "task-01"}
      />
    ));
  }

  return (
    <div className="app-shell">
      <TopBar />

      <main className="workspace">
        <header className="workspace-heading">
          <p className="section-label">Proyecto Scrum</p>
          <h1>Planificación de sprints</h1>
        </header>

        <div className="board-scroll">
          <div className="board">
            <BoardColumn title="Backlog" number="">
              {renderTasks(null)}
            </BoardColumn>

            <BoardColumn title="Sprint" number="01">
              {renderTasks("sprint-01")}
            </BoardColumn>

            <BoardColumn title="Sprint" number="02">
              {renderTasks("sprint-02")}
            </BoardColumn>

            <BoardColumn title="Sprint" number="03">
              {renderTasks("sprint-03")}
            </BoardColumn>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;