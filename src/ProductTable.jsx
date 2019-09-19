import React from "react";
import products from "./products";
import ProductRow from "./ProductRow";

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products
          .filter(
            product =>
              product.name.toUpperCase().includes(props.search.toUpperCase()) &&
              (!props.checked || product.stocked)
          )
          .map(product => (
            <ProductRow
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          ))}
      </tbody>
    </table>
  );
}
