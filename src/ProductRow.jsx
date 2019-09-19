import React from "react";

export default function ProductRow(props) {
  return (
    <tr>
      <td style={{ color: props.stocked ? "black" : "red" }}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}
