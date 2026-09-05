type BoardColumnProps = {
  title: string;
  number: string;
};

export function BoardColumn({ title, number }: BoardColumnProps) {
  return (
    <section className="board-column">
      <header className="column-header">
        <h2>
          {title} <span>{number}</span>
        </h2>

        <div className="column-line" />
      </header>

      <div className="column-content">
        <p className="empty-column">Sin tareas</p>
      </div>
    </section>
  );
}