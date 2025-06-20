import React from "react";

export default function Button({ children, activeButton }) {
  return <button className={activeButton}>{children}</button>;
}
