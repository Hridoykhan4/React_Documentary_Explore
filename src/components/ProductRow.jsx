const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className={product.stocked ? 'text-green-500' : 'text-red-400'} >{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
