import React, { useState } from 'react';
import * as favAPI from '../utilities/favs-api'


function ProductDisplay({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [comment, setComment] = useState('');

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCommentChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const saveComment = async () => {
    // Here you can implement logic to save the comment to the backend using an API call.
    // For simplicity, let's just log the comment for now.
    console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
    // Reset the selected product and comment after saving.
    const addFav = await favAPI.addFav(selectedProductId, comment);

    setSelectedProductId(null);
    setComment('');
  };

  async function saveComment1(selectedProductId, comment) {
    console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
    const addFav = await favAPI.addFav(selectedProductId, comment);
    setSelectedProductId(null);
    setComment('');
  }

  return (
    <>
      <div>ProductDisplay</div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product._id} {product.name} {product.price}
            <button onClick={() => handleProductClick(product._id)} className="button btn-sm">
              Add Comment
            </button>
            {selectedProductId === product._id && (
              <>
                <textarea value={comment} onChange={handleCommentChange} />
                <button onClick={saveComment} className="button btn-sm">
                  Save Comment
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductDisplay;
