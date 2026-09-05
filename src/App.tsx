import "./App.css";
import { TopBar } from "./components/TopBar";
import { BoardColumn } from "./components/BoardColumn";

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
            <BoardColumn title="Backlog" number="00" />
            <BoardColumn title="Sprint" number="01" />
            <BoardColumn title="Sprint" number="02" />
            <BoardColumn title="Sprint" number="03" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;