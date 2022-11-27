import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import { getProducts } from '../database/connect';
import { totalSum } from './cartpage';

const h1Styles = css`
  display: flex;
  justify-content: center;
`;
const h2Styles = css`
  display: flex;
  justify-content: center;
`;
const sumStyles = css`
  display: flex;
  justify-content: center;
`;

const inputContainer = css`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
const inputStyles = css`
  margin-bottom: 1rem;
`;

export default function CheckoutPage(props) {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [adressInput, setAdressInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [postalCodeInput, setPostalCodeInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [creditCardInput, setCreditCardInput] = useState('');
  const [expirationDateInput, setExpirationDateInput] = useState('');
  const [securityCodeInput, setSecurityCodeInput] = useState('');

  const initialValue = 0;
  const totalSumArray = totalSum(props).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue,
  );
  console.log(props);
  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="Checkout Page" />
      </Head>
      <div css={h1Styles}>
        <h1>Checkout</h1>
      </div>
      <h2 css={h2Styles}>Total:</h2>
      <br />
      <div css={sumStyles}>{totalSumArray}€</div>
      <br />
      <br />

      <div css={inputContainer}>
        <div>
          <form method="POST" action="/thankyoupage">
            <label>
              First Name
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-first-name"
                value={firstNameInput}
                required
                onChange={(event) => {
                  setFirstNameInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />

            <label>
              Last Name
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-last-name"
                value={lastNameInput}
                required
                onChange={(event) => {
                  setLastNameInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Email
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-email"
                value={emailInput}
                required
                onChange={(event) => {
                  setEmailInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Address
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-address"
                value={adressInput}
                required
                onChange={(event) => {
                  setAdressInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              City
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-city"
                value={cityInput}
                required
                onChange={(event) => {
                  setCityInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Postal Code
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-postal-code"
                value={postalCodeInput}
                required
                onChange={(event) => {
                  setPostalCodeInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Country
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-country"
                value={countryInput}
                required
                onChange={(event) => {
                  setCountryInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Credit Card
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-credit-card"
                value={creditCardInput}
                required
                onChange={(event) => {
                  setCreditCardInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Expiration Date
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-expiration-date"
                value={expirationDateInput}
                required
                onChange={(event) => {
                  setExpirationDateInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <label>
              Security Code
              <br />
              <input
                css={inputStyles}
                data-test-id="checkout-security-code"
                value={securityCodeInput}
                required
                onChange={(event) => {
                  setSecurityCodeInput(event.currentTarget.value);
                }}
              />
            </label>
            <br />
            <br />
            <button data-test-id="checkout-confirm-order">Confirm Order</button>
          </form>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const parsedCookies = context.req.cookies.cart
    ? JSON.parse(context.req.cookies.cart)
    : [];
  const cartProducts = (await getProducts()).map((product) => {
    return {
      ...product,
      cart:
        parsedCookies.find(
          (cookieProductObject) => product.id === cookieProductObject.id,
        )?.cart || 0,
    };
  });

  return {
    props: {
      products: cartProducts,
    },
  };
}
