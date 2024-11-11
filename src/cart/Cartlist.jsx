import React, { useState, useContext } from 'react';
import './cart.style.css'; 
import data from '../constant/data';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FrameContext } from './FrameProvider'; 

const CartList = ({ onClose }) => {
  const [clickedItemId, setClickedItemId] = useState(null);
  const { toggleFrame, setClickFrameIs, } = useContext(FrameContext);

    const handleItemClick = (item) => {
        if (clickedItemId === item.id) {
            setClickedItemId(null);
        } else {
            toggleFrame({
              
                id:item.id  
            });
            setClickedItemId(item.id);  
            setClickFrameIs(item.id)

        }
    };
    

    return (
    <div className="cart">
            <div className="header_menubar" >
                <h6 className="header-title">Meet Our Experts</h6>

                <CloseOutlinedIcon className='close-button '  color='red'  onClick={onClose} />

            </div>

            <ul className="cart-list">
                {data.expertList && data.expertList.length > 0 ? (
                    data.expertList.map((item,) => (
                        <li key={item.id} className="cart-item">
                            <div 
                                className={`cart-item-box ${clickedItemId === item.id ? 'clicked' : ''}`} 
                                onClick={() => handleItemClick(item)}  // Trigger frame toggle
                            >
 {item.icon}
                                <div className="cart-item-details">
                                    <p className="cart-item-type">{item.expertise}</p>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="empty-cart">No items in the cart</li>
                )}
            </ul>
        </div>
    );
};

export default CartList;
