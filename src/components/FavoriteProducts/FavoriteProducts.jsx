import React, { useState, useEffect } from 'react';
import * as favAPI from '../../utilities/favs-api';
import styles from './FavoriteProducts.module.css';

function FavoriteProducts() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [editForms, setEditForms] = useState({});
  const [editedText, setEditedText] = useState({});

  useEffect(() => {
    // Fetch favorite products when the component mounts
    fetchFavoriteProducts();
  }, []);

  const fetchFavoriteProducts = async () => {
    try {
      const favorites = await favAPI.getFavorites();
      // Initialize editForms state based on fetched favorites
      const initialEditForms = favorites.reduce((acc, product) => {
        acc[product.product._id] = false;
        return acc;
      }, {});
      setFavoriteProducts(favorites);
      setEditForms(initialEditForms);
    } catch (error) {
      console.error('Error fetching favorite products:', error);
    }
  };

  const getReviewTextAlignment = (reviewText) => {
    return reviewText.length > 50 ? 'left' : 'center';
  };

  const handleEditComment = (productId) => {
    // Toggle the edit form visibility for the corresponding product
    setEditForms((prevForms) => ({
      ...prevForms,
      [productId]: !prevForms[productId],
    }));
  };

  const handleTextChange = (productId, newText) => {
    // Update the edited text for the corresponding product
    setEditedText((prevText) => ({
      ...prevText,
      [productId]: newText,
    }));
  };

  const handleFormSubmit = async (productId) => {
    // Handle the logic for submitting the form and updating the comment
    try {
      const updatedReview = editedText[productId];
      await favAPI.updateFavorite(productId, updatedReview);
      // After updating, refetch the favorite products
      await fetchFavoriteProducts();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
    // Hide the edit form after submission
    setEditForms((prevForms) => ({
      ...prevForms,
      [productId]: false,
    }));
  };

  const handleDeleteReview = async (productId) => {
    try {
      // Call the delete API endpoint to delete the review
      await favAPI.deleteFavorite(productId);
      // After deleting, refetch the favorite products
      await fetchFavoriteProducts();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };


  return (
    <div className={styles.favoriteProductsContainer}>
      <h2 className={styles.title}>Favorite Products</h2>
      {favoriteProducts.length === 0 ? (
        <p className={styles.noFavorites}>No favorite products available.</p>
      ) : (
        <div className={styles.productDisplayContainer}>
          {favoriteProducts.map((product) => (
            <div key={product._id} className={styles.productItem}>
              <div className={styles.productInfo}>
                <span className={styles.label}>Product Name:</span>
                <span className={styles.value}>{product.product.name}</span>
              </div>
              {/* New: Display product image */}
              <img
                src={`images/${product.product.image}`}
                alt={`Thumbnail for ${product.product.name}`}
                className={`${styles.productImage} ${styles.smallImage}`}
              />
              <div className={styles.productInfo}>
                {/* New: Display product description */}
                <span className={styles.label}>Description:</span>
                <span className={styles.value}>{product.product.description}</span>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.label}>My Review:</span>
                {editForms[product._id] ? (
                  // Display the form when editForms is true
                  <textarea
                    className={styles.editForm}
                    value={editedText[product._id] || product.favtext}
                    onChange={(e) => handleTextChange(product._id, e.target.value)}
                  />
                ) : (
                  // Display the review text when editForms is false
                  <span
                    className={`${styles.value} ${styles.reviewText}`}
                    style={{ textAlign: getReviewTextAlignment(product.favtext) }}
                  >
                    {product.favtext}
                  </span>
                )}
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEditComment(product._id)}
                >
                  {editForms[product._id] ? 'Cancel' : 'Edit Comment'}
                </button>
                {editForms[product._id] && (
                  <button
                    className={styles.submitButton}
                    onClick={() => handleFormSubmit(product._id)}
                  >
                    Submit
                  </button>
                )}
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteReview(product._id)}
                >
                  Delete Review
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteProducts;
