import React from "react";

const SearchPanel = ({ search }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue br4"
        type="search"
        name="search"
        placeholder="search robots..."
        onChange={search}
      />
    </div>
  );
};

export default SearchPanel;
