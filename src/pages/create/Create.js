import { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";

// Styles
import "./Create.css";

const weightClasses = [
  { value: "lightweight", label: "Lightweight" },
  { value: "welterweight", label: "Welterweight" },
  { value: "middleweight", label: "Middleweight" },
  { value: "heavyweight", label: "Heavyweight" },
];

export default function Create() {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  // form field states and values
  const [eventPromoter, setEventPromoter] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [assignedFighters, setAssignedFighters] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError(null);

    if (!weightClass) {
      setFormError("Please select a weight class");
      return;
    }
    if (assignedFighters.length < 1) {
      setFormError("Please assign the event to at least 1 fighter");
      return;
    }

    console.log(
      eventPromoter,
      details,
      date,
      weightClass.value,
      assignedFighters
    );
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
          <span>Select Boxers:</span>
          <Select
            onChange={(option) => setAssignedFighters(option)}
            options={users}
            isMulti
          />
        </label>

        <button className="btn">Add Event</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
