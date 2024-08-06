import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart-context';
import { CartProvider } from '../../contexts/cart-context';



const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  // const handlePayment = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3737/api/payments/create-preference', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ cartItems }),
  //     });

  //     const { id } = await response.json();

  //     const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
  //       locale: 'es-AR',
  //     });

  //     mp.checkout({
  //       preference: {
  //         id,
  //       },
  //       autoOpen: true, // Automatically open the payment checkout
  //     });
  //   } catch (error) {
  //     console.error('Error creating Mercado Pago preference:', error);
  //   }
  // };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CheckoutItem
              key={cartItem.id}
              
              cartItem={cartItem}
              // addItem={CartProvider.addItem}
              //  removeItem={CartProvider.removeItem}
              //  clearItem ={CartProvider.clearItem}
            />
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
      <div className="text-right mt-4">
        <span className="text-xl font-semibold">
          Total: $
          {cartItems
            .reduce(
              (total, cartItem) => total + cartItem.price * cartItem.quantity,
              0
            )
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};
// const CheckoutButton = ({ preferenceId }) => {
//   return (
//     <div>
//       <h2>Complete Your Purchase</h2>
//       <div id="wallet_container">
//         <Wallet
//           initialization={{ preferenceId: preferenceId }}
//           customization={{ texts: { valueProp: 'smart_option' } }}
//         />
//       </div>
//     </div>
//   );
//CheckoutButton };

export default Checkout;



