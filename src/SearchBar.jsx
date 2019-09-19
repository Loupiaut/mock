import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <form action="">
        <input
          id="search"
          type="text"
          name="search"
          value={props.search}
          placeholder="Search..."
          onChange={props.onSearchChange}
        />
        <input
          type="checkbox"
          checked={props.stocked}
          name="stocked"
          id="hello"
          onChange={props.onSearchChange}
        />
        Only show products in stock
      </form>
    </div>
  );
}
