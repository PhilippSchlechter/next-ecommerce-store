import Head from 'next/head';
import { useState } from 'react';

export default function CheckoutPage() {
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

  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <meta name="description" content="Checkout Page" />
      </Head>
      <h1>Checkout</h1>
      <div>
        <form method="POST" action="/thankyoupage">
          <label>
            First Name
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
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
            <input
              data-test-id="checkout-security-code"
              value={securityCodeInput}
              required
              onChange={(event) => {
                setSecurityCodeInput(event.currentTarget.value);
              }}
            />
          </label>
          <br />
          <button data-test-id="checkout-confirm-order">Confirm Order</button>
        </form>
      </div>
    </>
  );
}
