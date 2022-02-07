import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

export default function EventSummary({ event }) {
  const { deleteDocument } = useFirestore("events");
  const { user } = useAuthContext();
  const history = useHistory();

  const handleClick = (e) => {
    deleteDocument(event.id);
    history.push("/");
  };
  return (
    <div>
      <div className="event-summary">
        <h2 className="page-title">{event.eventName}</h2>
        <p>By {event.createdBy.displayName}</p>
        <p className="date">
          It's going down on {event.date.toDate().toDateString()}
        </p>
        <p className="details">{event.details}</p>
        <h4>Fighters attending this event:</h4>
        <div className="assigned-fighters">
          {event.assignedFightersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>

      {user.uid === event.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Cancel Fight
        </button>
      )}
    </div>
  );
}
