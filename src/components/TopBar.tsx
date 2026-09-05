export function TopBar() {
  return (
    <header className="topbar">
      <button className="menu-button" aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </button>

      <nav className="task-actions" aria-label="Acciones de tareas">
        <button className="action-button">
          <span>Task</span>
        </button>

        <button className="action-button">
          <span>Select</span>
        </button>

        <button className="action-button" disabled>
          <span>Delete</span>
        </button>
      </nav>

      <button className="profile-button" aria-label="Perfil de usuario">
        CG
      </button>
    </header>
  );
}