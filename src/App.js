import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function App() {
  const [state, setState] = useState({
    search: "",
    stocked: false
  });
  function handleChange(evt) {
    let value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  }

  return (
    <div className="App">
      <SearchBar
        search={state.search}
        checked={state.stocked}
        onSearchChange={handleChange}
      />
      <ProductTable search={state.search} checked={state.stocked} />
    </div>
  );
}

export default App;
