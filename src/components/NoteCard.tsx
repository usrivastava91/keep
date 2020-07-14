import React, { useEffect } from "react";
import "./NoteCard.scss";
interface Props {
  body: string;
  id: number;
  title: string;
}
export const NoteCard: React.FC<Props> = (props: Props) => {
  const { id, title, body } = props;
  const summary = body.substring(0, 50);
  return (
    <div className="note-card">
      <h4 className="title">{title}</h4>
      <div className="body">{summary + "..."}</div>
    </div>
  );
};
