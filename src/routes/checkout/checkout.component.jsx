import { useContext } from 'react';
import CartItem from '../../components/cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles';
import PaymentForm from '../../components/payment-form/payment-form.component';


const Checkout = () => {
    //const { cartItems, cartTotal} = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
      <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
      <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
      <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
      <span>Remove</span>
      </HeaderBlock>

    </CheckoutHeader>
        {
          cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          })
        }
        <Total>Total: ${cartTotal}</Total>
        <PaymentForm />
      

    </CheckoutContainer>
  );
};

export default Checkout;
