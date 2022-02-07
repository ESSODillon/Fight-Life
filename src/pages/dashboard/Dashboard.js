import EventList from "../../components/EventList";
import { useCollection } from "../../hooks/useCollection";
import EventFilter from "./EventFilter";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// Styles
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("events");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const events = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            console.log(document.weightClass);
            document.assignedFightersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "lightweight":
          case "welterweight":
          case "middleweight":
          case "heavyweight":
            console.log(document.weightClass, currentFilter);
            return document.weightClass === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      {error && <p className="error">{error}</p>}

      {documents && (
        <EventFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}

      {documents && <EventList events={events} />}
    </div>
  );
}
