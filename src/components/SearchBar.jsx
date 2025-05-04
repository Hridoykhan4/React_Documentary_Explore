const SearchBar = ({
  filterText,
  setFilterText,
  inStockOnly,
  setInStockOnly,
}) => {
  return (
    <div>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
        className="input"
      />
      <br /> <br />
      <label>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
