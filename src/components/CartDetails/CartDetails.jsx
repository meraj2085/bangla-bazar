import React, { useContext } from 'react';
import { CartContext } from '../../Layout/Layout';
import { removeFromDb } from '../../utilities/fakeDataBase';
import CartItem from './CartItem';

const CartDetails = () => {
     const [cart, setCart] = useContext(CartContext);
     
     const handleRemove = (id) =>{
          const remaining = cart.filter(product => product.id !== id)
          setCart(remaining)
          removeFromDb(id)
     }
     return (
          <div className='mx-[450px] flex flex-col divide-y divide-gray-700'>
               {
                    cart.map(product => <CartItem product={product} handleRemove={handleRemove} key={product.id}></CartItem>)
               }
          </div>
     );
};

export default CartDetails;