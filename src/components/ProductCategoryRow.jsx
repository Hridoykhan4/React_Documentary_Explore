const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th
        colSpan="2"
        className="bg-gradient-to-r rounded-lg from-red-500 to-yellow-400"
      >
        {category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
