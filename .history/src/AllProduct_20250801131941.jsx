import React, { use } from 'react';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://mediatracker-dp6t.onrender.com/api/products');
            setProducts(response.data);
            console.log(response.data, 'Fetched Products');
        };

        fetchProducts();
    }, []);

  return (
    <div className='table-container'>
    <h2 className='table-header'>All Products</h2>
    <table className='product-table'>
      <thead>
        <tr>
          <th>Gender</th>
          <th>Category</th>
          <th>SubCategory</th>
          <th>Product Name</th>
           <th>Image</th>
            <th>Price</th>
            <th>Priority</th> 
        </tr>
      </thead>
    </table>
    </div>
  )
}

export default AllProduct;
