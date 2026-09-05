import "./App.css";

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <p className="eyebrow">Sprint activo</p>
        <h1>Scrum Dashboard</h1>
        <p>Consulta el progreso y la carga de trabajo del equipo.</p>
      </header>

      <section className="metrics-grid">
        <article className="metric-card">
          <span>Tareas completadas</span>
          <strong>18</strong>
        </article>

        <article className="metric-card">
          <span>Puntos pendientes</span>
          <strong>24</strong>
        </article>

        <article className="metric-card">
          <span>Velocidad del equipo</span>
          <strong>42</strong>
        </article>

        <article className="metric-card">
          <span>Bloqueos activos</span>
          <strong>2</strong>
        </article>
      </section>
    </main>
  );
}

export default App;