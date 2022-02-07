import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import EventSummary from "./EventSummary";

// Styles
import "./Event.css";
import EventComments from "./EventComments";

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
      <EventSummary event={document} />
      <EventComments />
    </div>
  );
}
