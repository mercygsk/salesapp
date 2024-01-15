import React, { useState } from 'react';
import * as favAPI from '../../utilities/favs-api';
import styles from './ProductDisplay.module.css'; // Correct import statement
import '../../index.css'; // Import the global styles

function ProductDisplay({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [comment, setComment] = useState('');

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setComment('');
  };

  const handleCommentChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const saveComment = async () => {
    console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
    const addFav = await favAPI.addFav(selectedProductId, comment);
    setSelectedProductId(null);
    setComment('');
  };

  const cancelComment = () => {
    setSelectedProductId(null);
    setComment('');
  };

  return (
    <div className={`${styles.productDisplayContainer} ${styles.globalStyles}`}>
      {products.map((product) => (
        <div key={product._id} className={styles.productItem}>
          <span className={styles.productTitle}>{product.name}</span>
          <span className={styles.productPrice}>{product.price}</span>
          <button
            onClick={() => handleProductClick(product._id)}
            className={`${styles.commentButton} ${styles.button}`}
          >
            Add Comment
          </button>
          {selectedProductId === product._id && (
            <>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className={`${styles.commentTextarea} ${styles.inputField}`}
              />
              <div className={styles.buttonsContainer}>
                <button
                  onClick={saveComment}
                  className={`${styles.saveCommentButton} ${styles.button}`}
                >
                  Save Comment
                </button>
                <button onClick={cancelComment} className={`${styles.cancelButton} ${styles.button}`}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;
