import { useState } from "react";
import Select from "react-select";

// Styles
import "./Create.css";

const weightClasses = [
  { value: "lightweight", label: "Lightweight" },
  { value: "welterweight", label: "Welterweight" },
  { value: "middleweight", label: "Middleweight" },
  { value: "heavyweight", label: "Heavyweight" },
];

export default function Create() {
  const [eventPromoter, setEventPromoter] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [assignedFighters, setAssignedFighters] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventPromoter, details, date, weightClass.value);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Fight Promoter:</span>
          <input
            required
            type="text"
            onChange={(e) => setEventPromoter(e.target.value)}
            value={eventPromoter}
          />
        </label>
        <label>
          <span>Event Details:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Event Date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Weight Class:</span>
          <Select
            options={weightClasses}
            onChange={(option) => setWeightClass(option)}
          />
        </label>
        <label>
          <span>Select Fighters:</span>
          {/* Fighters selected here */}
        </label>

        <button className="btn">Add Event</button>
      </form>
    </div>
  );
}
