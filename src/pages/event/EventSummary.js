import Avatar from "../../components/Avatar";

export default function EventSummary({ event }) {
  return (
    <div>
      <div className="event-summary">
        <h2 className="page-title">{event.eventName}</h2>
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
    </div>
  );
}
