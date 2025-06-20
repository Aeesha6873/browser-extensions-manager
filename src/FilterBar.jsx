import React from "react";
import Button from "./Button";

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <span>Extentions List</span>
      <div className="filter-button">
        <Button activeButton="active"> All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
    </div>
  );
}
