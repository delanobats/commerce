import Link from 'next/link';
// import CartItem from '../CartItem'
import { useUI } from '../../../contexts/managed-ui';
import { BasicButton } from '../../button/BasicButton';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { CartContext } from '../../../contexts/cart';
import { useContext, useEffect } from 'react';
import axios from 'axios';
// import useCart from '@framework/cart/use-cart'
// import usePrice from '@framework/product/use-price'

const CartSidebarView = () => {
  const { closeSidebar, setSidebarView } = useUI();
  const { state, dispatch } = useContext(CartContext);

  //   const { data, isLoading, isEmpty } = useCart()

  //   const { price: subTotal } = usePrice(
  //     data && {
  //       amount: Number(data.subtotalPrice),
  //       currencyCode: data.currency.code,
  //     }
  //   )
  //   const { price: total } = usePrice(
  //     data && {
  //       amount: Number(data.totalPrice),
  //       currencyCode: data.currency.code,
  //     }
  //   )
  const handleClose = () => closeSidebar();
  const goToCheckout = () => setSidebarView('CHECKOUT_VIEW');

  // useEffect(() => {
  //   // if (state) {
  //   dispatch({ type: 'FETCH_REQUEST' });

  //   axios
  //     .get('/api/get-cart')
  //     .then((res) => {
  //       dispatch({ type: 'FETCH_SUCCESS', payload: res.data.data.data });
  //       // Cookies.set('bc_cartId', res.data.data.data.id, { expires: 7 });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       dispatch({ type: 'FETCH_FAILURE', payload: error.message });
  //     });
  //   // }
  // }, [dispatch]);

  const error = null;
  const success = null;

  return (
    <div className="relative h-full flex flex-col bg-white-50">
      <header className="sticky top-0 px-4 py-4 flex items-center justify-between bg-white-500 box-border w-full z-10 min-[66px]">
        <h2 className="text-heading-sm text-blue-900"> My Cart</h2>
        <button
          onClick={handleClose}
          aria-label="Close"
          className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none text-blue-900"
        >
          <AiOutlineClose className="h-6 w-6 hover:text-accent-3" />
        </button>
      </header>
      <div className="flex flex-col flex-1 box-border">
        {/* {isLoading || isEmpty ? (
          <div className="flex-1 px-4 flex flex-col justify-center items-center">
            <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
              <Bag className="absolute" />
            </span>
            <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
              Your cart is empty
            </h2>
            <p className="text-accent-3 px-10 text-center pt-2">
              Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
            </p>
          </div>
        ) : error ? (
          <div className="flex-1 px-4 flex flex-col justify-center items-center">
            <span className="border border-white rounded-full flex items-center justify-center w-16 h-16">
              <Cross width={24} height={24} />
            </span>
            <h2 className="pt-6 text-xl font-light text-center">
              We couldn’t process the purchase. Please check your card information and try again.
            </h2>
          </div>
        ) : success ? (
          <div className="flex-1 px-4 flex flex-col justify-center items-center">
            <span className="border border-white rounded-full flex items-center justify-center w-16 h-16">
              <Check />
            </span>
            <h2 className="pt-6 text-xl font-light text-center">Thank you for your order.</h2>
          </div>
        ) : ( */}
        <>
          <div className="px-4 sm:px-6 flex-1">
            {/* <Link href="/cart">
              <h1 variant="sectionHeading" onClick={handleClose}>
                My Cart
              </h1>
            </Link> */}
            <ul>
              {state?.data?.line_items?.physical_items.map((item) => (
                <li>
                  {item.name}
                  {item.quantity}
                </li>
                // <CartItem
                //   key={item.id}
                //   item={item}
                //   currencyCode={data!.currency.code}
                // />
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0 px-6 py-6 sm:px-6 sticky z-20 bottom-0 w-full right-0 left-0 text-sm">
            {/* <ul className="pb-2">
              <li className="flex justify-between py-1">
                <span>Subtotal</span>
                <span>12.00</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Shipping</span>
                <span className="font-bold tracking-wide">FREE</span>
              </li>
            </ul> */}
            <div className="flex justify-between text-body-lg">
              <span>Total</span>
              <span>$0.00</span>
            </div>
            <p className="text-body-sm mt-2 mb-6">
              Shipping and taxes will be calculated at checkout.
            </p>
            <div>
              {/* TODO: Make this a link */}
              {/* <BasicButton
                href={state?.data?.redirect_urls?.checkout_url ?? '/checkout'}
                width="100%"
                label="Proceed to Checkout"
                stretch={true}
              >
                Proceed to Checkout
              </BasicButton> */}
            </div>
          </div>
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default CartSidebarView;
