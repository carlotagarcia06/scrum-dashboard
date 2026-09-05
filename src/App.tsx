import "./App.css";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="app-shell">
      <TopBar />

      <main className="workspace">
        <p className="section-label">Proyecto Scrum</p>
        <h1>Planificación de sprints</h1>
      </main>
    </div>
  );
}

export default App;