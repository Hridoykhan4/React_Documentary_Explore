import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FilterableProductTable from "../components/FilterableProductTable";
import { sculptureList } from "../components/sculptureList";
import Navbar from "../components/Navbar";

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
    <div className="">
        <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <FilterableProductTable products={PRODUCTS}></FilterableProductTable> */}
    </div>
  );
};

export default Root;
