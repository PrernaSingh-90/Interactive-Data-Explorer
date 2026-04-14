import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
       } finally {
         setLoading(false);
       }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gray-50 font-sans'>

      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <main className='container mx-auto px-4 py-10'>
        {loading && <Loader/> }

        {error && !loading && (
          <div className='max-w-md mx-auto bg-red-50 border-l-4 border-red-500
           p-4 rounded shadow-md text-center'>
            <p className='text-red-700 font-bold'>Error!</p>
            <p className='text-red-600'>{error}</p>
           </div>
        )}  

        {!loading && !error && (
          <>
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts}/>
          ) : (
            <div className='flex flex-col items-center justify-center py-20
             text-gray-500'>
              <span className='text-6xl mb-4'>🔍</span>
              <p className='text-xl'>No Products found for "{searchQuery}"</p>
              <button onClick={() => setSearchQuery("")}
                className='mt-4 text-blue-600 underline hover:text-blue-800'>
                  Clear Search
                </button>
             </div>
          )}
          </>
        )}
      </main>
    </div>
  );
};

export default App




