import React from "react";

const Searchbox = ({ onSearch }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br-pill "
        type="search"
        placeholder="Search Robots"
        onChange={onSearch}
      />
    </div>
  );
};

export default Searchbox;
