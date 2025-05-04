// import { useState } from "react";
import { Outlet } from "react-router-dom";
import FilterableProductTable from "../components/FilterableProductTable";

const Root = () => {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return (
    <div className="p-10 space-y-4">
      <h2>Hi I am ROot</h2>
      <Outlet></Outlet>
      <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
    </div>
  );
};

export default Root;
