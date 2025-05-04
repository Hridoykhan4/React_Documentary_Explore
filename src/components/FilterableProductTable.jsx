import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className="max-w-[400px] mx-auto">
      <SearchBar
        setFilterText={setFilterText}
        filterText={filterText}
        setInStockOnly={setInStockOnly}
        inStockOnly={inStockOnly}
      ></SearchBar>
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      ></ProductTable>
    </div>
  );
};

export default FilterableProductTable;
