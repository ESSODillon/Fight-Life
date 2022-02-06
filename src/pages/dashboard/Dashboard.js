import EventList from "../../components/EventList";
import { useCollection } from "../../hooks/useCollection";

// Styles
import "./Dashboard.css";

export default function Dashboard() {
  const { documents, error } = useCollection("events");

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <EventList events={documents} />}
    </div>
  );
}
