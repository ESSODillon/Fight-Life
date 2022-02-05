import { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

// Styles
import "./Create.css";

const weightClasses = [
  { value: "lightweight", label: "Lightweight" },
  { value: "welterweight", label: "Welterweight" },
  { value: "middleweight", label: "Middleweight" },
  { value: "heavyweight", label: "Heavyweight" },
];

const promoters = [
  { value: "dazn", label: "DAZN" },
  { value: "showtime", label: "Showtime Boxing" },
  { value: "hbo", label: "HBO Boxing" },
  { value: "triller", label: "Triller" },
];

export default function Create() {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  // form field states and values
  const [eventName, setEventName] = useState("");
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
    if (!eventPromoter) {
      setFormError("Please select an event promoter");
      return;
    }
    if (assignedFighters.length < 1) {
      setFormError("Please assign the event to at least 1 fighter");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedFightersList = assignedFighters.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.uid,
      };
    });

    const event = {
      eventName,
      eventPromoter: eventPromoter.value,
      details,
      weightClass: weightClass.value,
      date: timestamp.fromDate(new Date(date)),
      comments: [],
      createdBy,
      assignedFightersList,
    };

    console.log(event);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setEventName(e.target.value)}
            value={eventName}
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
          <span>Promoter:</span>
          <Select
            options={promoters}
            onChange={(option) => setEventPromoter(option)}
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
