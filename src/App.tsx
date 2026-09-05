import "./App.css";
import { TopBar } from "./components/TopBar";
import { BoardColumn } from "./components/BoardColumn";
import { TaskCard } from "./components/TaskCard";

function App() {
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
              <TaskCard
                title="Definir historias de usuario"
                description="Documentar las necesidades principales del proyecto."
                points={5}
                status="Pendiente"
                selected
              />

              <TaskCard
                title="Configurar repositorio"
                description="Preparar GitHub y el flujo de ramas."
                points={3}
                status="Terminada"
              />
            </BoardColumn>

            <BoardColumn title="Sprint" number="01">
              <TaskCard
                title="Crear estructura principal"
                description="Construir la barra superior y el tablero."
                points={5}
                status="En progreso"
              />
            </BoardColumn>

            <BoardColumn title="Sprint" number="02" />
            <BoardColumn title="Sprint" number="03" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;