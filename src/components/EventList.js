// styles
import "./EventList.css";

export default function EventList({ events }) {
  return (
    <div>
      {events.length === 0 && <p>No events yet!</p>}
      {events.map((event) => (
        <div key={event.id}>{event.eventName}</div>
      ))}
    </div>
  );
}
