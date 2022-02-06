import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

// Styles
import "./Event.css";

export default function Event() {
  const { id } = useParams();
  const { error, document } = useDocument("events", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="event-details">
      <h1>{document.eventName}</h1>
    </div>
  );
}
