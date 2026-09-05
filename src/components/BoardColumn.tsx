import type { ReactNode } from "react";

type BoardColumnProps = {
  title: string;
  number: string;
  children?: ReactNode;
};

export function BoardColumn({
  title,
  number,
  children,
}: BoardColumnProps) {
  return (
    <section className="board-column">
      <header className="column-header">
        <h2>
          {title} <span>{number}</span>
        </h2>

        <div className="column-line" />
      </header>

      <div className="column-content">
        {children ?? <p className="empty-column">Sin tareas</p>}
      </div>
    </section>
  );
}