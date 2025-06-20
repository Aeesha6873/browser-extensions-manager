import React from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";

import ExtentionList from "./ExtentionList";

export default function App() {
  return (
    <div className="main">
      <Header></Header>
      <FilterBar></FilterBar>
      <ExtentionList></ExtentionList>
    </div>
  );
}
