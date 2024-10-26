// import React from 'react';
// import './cartdesign.style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import data from '../constant/data';
// const Cart = ({ cartItem }) => {
//     const id=cartItem.id
//     const currentCartItem=data.skillSets[id]
// console.log(currentCartItem )
//     return (
//         <div className="shopping-cart-container">
//             <h2 className="shopping-cart-title">Your Cart</h2>
//             {currentCartItem ? (
//                 <div className="shopping-cart-item">
//                     <img src={cartItem.image} alt={cartItem.name} className="shopping-cart-item-image" />
//                     <div className="shopping-cart-item-details">
//                         <FontAwesomeIcon icon="fa-brands fa-github" />
//                         <h3 className="shopping-cart-item-name">{currentCartItem.name}</h3>
//                         <p className="shopping-cart-item-experience"><strong>Experience:</strong> {currentCartItem.experience}</p>
//                         <p className="shopping-cart-item-description">{currentCartItem.description}</p>
//                     </div>
//                 </div>
//             ) : (
//                 <p>Your cart is empty.</p>
//             )}
//         </div>
//     );
// };

// export default Cart;
