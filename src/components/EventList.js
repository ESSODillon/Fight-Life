import { Link } from "react-router-dom";
import Avatar from "./Avatar";

// styles
import "./EventList.css";

export default function EventList({ events }) {
  console.log(events);
  return (
    <div className="event-list">
      {events.length === 0 && <p>No events yet!</p>}
      {events.map((event) => (
        <Link to={`/events/${event.id}`} key={event.id}>
          <h4>{event.eventName}</h4>
          <p>{event.date.toDate().toDateString()}</p>
          <div className="assigned-fighters">
            <ul>
              {event.assignedFightersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
