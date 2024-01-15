// import React, { useState } from 'react';
// import * as favAPI from '../utilities/favs-api'


// function ProductDisplay({ products }) {
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [comment, setComment] = useState('');

//   const handleProductClick = (productId) => {
//     setSelectedProductId(productId);
//   };

//   const handleCommentChange = (event) => {
//     event.preventDefault();
//     setComment(event.target.value);
//   };

//   const saveComment = async () => {
//     // Here you can implement logic to save the comment to the backend using an API call.
//     // For simplicity, let's just log the comment for now.
//     console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
//     // Reset the selected product and comment after saving.
//     const addFav = await favAPI.addFav(selectedProductId, comment);

//     setSelectedProductId(null);
//     setComment('');
//   };

//   async function saveComment1(selectedProductId, comment) {
//     console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
//     const addFav = await favAPI.addFav(selectedProductId, comment);
//     setSelectedProductId(null);
//     setComment('');
//   }

//   return (
//     <>
//       <div>ProductDisplay</div>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product._id} {product.name} {product.price}
//             <button onClick={() => handleProductClick(product._id)} className="button btn-sm">
//               Add Comment
//             </button>
//             {selectedProductId === product._id && (
//               <>
//                 <textarea value={comment} onChange={handleCommentChange} />
//                 <button onClick={saveComment} className="favorite-button">
//                   Save Comment
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ProductDisplay;

//=================================================================

// import React, { useState } from 'react';
// import * as favAPI from '../utilities/favs-api';
// import './ProductDisplay.css';

// function ProductDisplay({ products }) {
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [comment, setComment] = useState('');

//   const handleProductClick = (productId) => {
//     setSelectedProductId(productId);
//     setComment(''); // Reset comment when selecting a new product
//   };

//   const handleCommentChange = (event) => {
//     event.preventDefault();
//     setComment(event.target.value);
//   };

//   const saveComment = async () => {
//     console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
//     const addFav = await favAPI.addFav(selectedProductId, comment);
//     setSelectedProductId(null);
//     setComment('');
//   };

//   const cancelComment = () => {
//     setSelectedProductId(null);
//     setComment('');
//   };

// //   return (
// //     <>
// //       <div>ProductDisplay</div>
// //       <ul>
// //         {products.map((product) => (
// //           <li key={product._id}>
// //             {product._id} {product.name} {product.price}
// //             <button onClick={() => handleProductClick(product._id)} className="button btn-sm">
// //               Add Comment
// //             </button>
// //             {selectedProductId === product._id && (
// //               <>
// //                 <textarea value={comment} onChange={handleCommentChange} />
// //                 <button onClick={saveComment} className="favorite-button">
// //                   Save Comment
// //                 </button>
// //                 <button onClick={cancelComment} className="button btn-sm">
// //                   Cancel
// //                 </button>
// //               </>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // }

// // export default ProductDisplay;

// return (
//   <>
//     <div className="product-display-container">
//       <div>ProductDisplay</div>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id} className="product-item">
//             <span className="product-title">
//               {product._id} {product.name} {product.price}
//             </span>
//             <button onClick={() => handleProductClick(product._id)} className="comment-button">
//               Add Comment
//             </button>
//             {selectedProductId === product._id && (
//               <>
//                 <textarea value={comment} onChange={handleCommentChange} className="comment-textarea" />
//                 <button onClick={saveComment} className="save-comment-button">
//                   Save Comment
//                 </button>
//                 <button onClick={cancelComment} className="cancel-button">
//                   Cancel
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </>
// );
// }

// export default ProductDisplay;

//==============================

// import React, { useState } from 'react';
// import * as favAPI from '../utilities/favs-api';
// import './ProductDisplay.css';

// function ProductDisplay({ products }) {
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [comment, setComment] = useState('');

//   const handleProductClick = (productId) => {
//     setSelectedProductId(productId);
//     setComment('');
//   };

//   const handleCommentChange = (event) => {
//     event.preventDefault();
//     setComment(event.target.value);
//   };

//   const saveComment = async () => {
//     //console.log(`Product ID: ${selectedProductId}, Comment: ${comment}`);
//     const addFav = await favAPI.addFav(selectedProductId, comment);
//     setSelectedProductId(null);
//     setComment('');
//   };

//   const cancelComment = () => {
//     setSelectedProductId(null);
//     setComment('');
//   };

//   return (
//     <div className="product-display-container">
//       {products.map((product) => (
//         <div key={product._id} className="product-item">
//           <span className="product-title">
//             {product.name} {product.price}
//           </span>
//           <button onClick={() => handleProductClick(product._id)} className="comment-button">
//             Add Comment
//           </button>
//           {selectedProductId === product._id && (
//             <>
//               <textarea value={comment} onChange={handleCommentChange} className="comment-textarea" />
//               <div className="buttons-container">
//                 <button onClick={saveComment} className="save-comment-button">
//                   Save Comment
//                 </button>
//                 <button onClick={cancelComment} className="cancel-button">
//                   Cancel
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductDisplay;

// import dependencies
import React, { useState } from 'react';
import * as favAPI from '../../utilities/favs-api';
import styles from './ProductDisplay.module.css';  // Correct import statement

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
    <div className={styles.productDisplayContainer}>
      {products.map((product) => (
        <div key={product._id} className={styles.productItem}>
          <span className={styles.productTitle}>{product.name}</span>
          <span className={styles.productPrice}>{product.price}</span>
          <button onClick={() => handleProductClick(product._id)} className={styles.commentButton}>
            Add Comment
          </button>
          {selectedProductId === product._id && (
            <>
              <textarea value={comment} onChange={handleCommentChange} className={styles.commentTextarea} />
              <div className={styles.buttonsContainer}>
                <button onClick={saveComment} className={styles.saveCommentButton}>
                  Save Comment
                </button>
                <button onClick={cancelComment} className={styles.cancelButton}>
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
