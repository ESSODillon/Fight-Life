const filterList = [
  "all",
  "mine",
  "lightweight",
  "welterweight",
  "middleweight",
  "heavyweight",
];

export default function EventFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="event-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            // when the current filter matches f, apply a class of active
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
