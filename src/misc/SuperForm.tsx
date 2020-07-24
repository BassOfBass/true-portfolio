import React from "react";
import "./SuperForm.scss";

/** The form with all possible values of autocomplete attribute. 
 * 
 * Source: https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont/#the-final-form
*/
export function SuperForm() {
  return (
    <form method="post" id="usrForm">
      <fieldset>
        <legend>Name and Company</legend>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          autoComplete="name" 
        />
        <label htmlFor="honorific-prefix">Honorific Prefix (e.g. "Mr.", "Ms.", "Dr.", "Mlle")</label>
        <input 
          type="text" 
          name="honorific-prefix" 
          id="honorific-prefix" 
          autoComplete="honorific-prefix" 
        />
        <label htmlFor="given-name">Given Name</label>
        <input 
          type="text" 
          name="given-name" 
          id="given-name" 
          autoComplete="given-name" 
        />
        <label htmlFor="additional-name">Additional Name</label>
        <input 
          type="text" 
          name="additional-name" 
          id="additional-name" 
          autoComplete="additional-name" 
        />
        <label htmlFor="family-name">Family Name</label>
        <input 
          type="text" 
          name="family-name" 
          id="family-name" 
          autoComplete="family-name" 
        />
        <label htmlFor="honorific-suffix">
          Honorific Suffix (e.g. "Jr.", "B.Sc.", "MBASW", "II")
        </label>
        <input 
          type="text" 
          name="honorific-suffix" 
          id="honorific-suffix" 
          autoComplete="honorific-suffix" 
        />
        <label htmlFor="nickname">Nickname</label>
        <input 
          type="text" 
          name="nickname" 
          id="nickname" 
          autoComplete="nickname" 
        />
        <label htmlFor="organization-title">Job Title</label>
        <input 
          type="text" 
          name="organization-title" 
          id="organization-title" 
          autoComplete="organization-title" 
        />
        <label htmlFor="organization">Organization</label>
        <input 
          type="text" 
          name="organization" 
          id="organization" 
          autoComplete="organization" 
        />
      </fieldset>
      <fieldset>
        <legend>Credentials</legend>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" autoComplete="username" />
        <label htmlFor="new-password">New Password</label>
        <input type="password" name="new-password" id="new-password" autoComplete="new-password" />
        <label htmlFor="current-password">Current Password</label>
        <input type="password" name="current-password" id="current-password" autoComplete="current-password" />
      </fieldset>
      <fieldset>
        <legend>Shipping Address</legend>
        <label htmlFor="street-address">Street Address</label>
        <textarea name="street-address" autoComplete="shipping street-address"></textarea>
        <label htmlFor="address-line1">Address Line 1</label>
        <input type="text" name="address-line1" id="address-line1" autoComplete="shipping address-line1" />
        <label htmlFor="address-line2">Address Line 2</label>
        <input type="text" name="address-line2" id="address-line2" autoComplete="shipping address-line2" />
        <label htmlFor="address-line3">Address Line 3</label>
        <input type="text" name="address-line3" id="address-line3" autoComplete="shipping address-line3" />
        <label htmlFor="address-level4">Address Level 4</label>
        <input type="text" name="address-level4" id="address-level4" autoComplete="shipping address-level4" />
        <label htmlFor="address-level3">Address Level 3</label>
        <input type="text" name="address-level3" id="address-level3" autoComplete="shipping address-level3" />
        <label htmlFor="address-level2">City (Address Level 2)</label>
        <input type="text" name="address-level2" id="address-level2" autoComplete="shipping address-level2" />
        <label htmlFor="address-level1">State/Province (Address Level 1)</label>
        <input type="text" name="address-level1" id="address-level1" autoComplete="shipping address-level1" />
        <label htmlFor="country">Country Code</label>
        <input type="text" name="country" id="country" autoComplete="shipping country" />
        <label htmlFor="country-name">Country Name</label>
        <input type="text" name="country-name" id="country-name" autoComplete="shipping country-name" />
        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" name="postal-code" id="postal-code" autoComplete="shipping postal-code" />
      </fieldset>
      <fieldset>
        <legend>Payment Information <b>DO NOT USE A REAL CARD NUMBER!!!</b></legend>
        <label htmlFor="cc-name">Name on Card</label>
        <input type="text" name="ccname" id="ccname" autoComplete="cc-name" />
        <label htmlFor="cc-given-name">Given Name on Card</label>
        <input type="text" name="cc-given-name" id="cc-given-name" autoComplete="cc-given-name" />
        <label htmlFor="cc-additional-name">Additional Name on Card</label>
        <input type="text" name="cc-additional-name" id="cc-additional-name" autoComplete="cc-additional-name" />
        <label htmlFor="cc-family-name">Family Name on Card</label>
        <input type="text" name="cc-family-name" id="cc-family-name" autoComplete="cc-family-name" />
        <label htmlFor="cc-number">Credit Card Number</label>
        <input type="text" name="ccnumber" id="ccnumber" autoComplete="cc-number" />
        <label htmlFor="cc-exp">Expiration Date</label>
        <input type="month" name="expdate" id="expdate" autoComplete="cc-exp" />
        <label htmlFor="cc-exp-month">Expiration Month</label>
        <input type="number" name="cc-exp-month" id="cc-exp-month" autoComplete="cc-exp-month" />
        <label htmlFor="cc-exp-year">Expiration Year</label>
        <input type="number" name="cc-exp-year" id="cc-exp-year" autoComplete="cc-exp-year" />
        <label htmlFor="cc-csc">CSC</label>
        <input type="text" name="cc-csc" id="cc-csc" autoComplete="cc-csc" />
        <label htmlFor="cc-type">Credit Card Type</label>
        <input type="text" name="cc-type" id="cc-type" autoComplete="cc-type" />
      </fieldset>
      <fieldset>
        <legend>Transaction information: The use case for this isn't a typical autofill. The expectation would be that these fields are hidden and the user agent might "use this information to suggest a credit card that it knows has sufficient balance and that supports the relevant currency."</legend>
        <label htmlFor="transaction-currency">Transaction Currency</label>
        <input type="text" name="transaction-currency" id="transaction-currency" autoComplete="transaction-currency" />
        <label htmlFor="transaction-amount">Transaction Amount</label>
        <input type="number" name="transaction-amount" id="transaction-amount" autoComplete="transaction-amount" />
      </fieldset>
      <fieldset>
        <legend>Personal information</legend>
        <label htmlFor="language">Preferred Language</label>
        <input type="text" name="language" id="language" autoComplete="language" />
        <label htmlFor="bday">Birthday</label>
        <input type="date" name="bday" id="bday" autoComplete="bday" />
        <label htmlFor="bday-day">Birthday Day</label>
        <input type="number" name="bday-day" id="bday-day" autoComplete="bday-day" />
        <label htmlFor="bday-month">Birthday Month</label>
        <input type="number" name="bday-month" id="bday-month" autoComplete="bday-month" />
        <label htmlFor="bday-year">Birthday year</label>
        <input type="number" name="bday-year" id="bday-year" autoComplete="bday-year" />
        <label htmlFor="sex">Gender Identity</label>
        <input type="text" name="sex" id="sex" autoComplete="sex" />
        <label htmlFor="url">URL</label>
        <input type="url" name="url" id="url" autoComplete="url" />
        <label htmlFor="photo">Photo URL</label>
        <input type="url" name="photo" id="photo" autoComplete="photo" />
      </fieldset>
      <fieldset>
        <legend>Home contact info</legend>
        <label htmlFor="tel">Telephone Number</label>
        <input type="tel" name="tel" id="tel" autoComplete="home tel" />
        <label htmlFor="tel-country-code">Country Code</label>
        <input type="text" name="tel-country-code" id="tel-country-code" autoComplete="home tel-country-code" />
        <label htmlFor="tel-national">Telephone number without the county code</label>
        <input type="text" name="tel-national" id="tel-national" autoComplete="home tel-national" />
        <label htmlFor="tel-area-code">Area Code</label>
        <input type="text" name="tel-area-code" id="tel-area-code" autoComplete="home tel-area-code" />
        <label htmlFor="tel-local">Telephone number without the country code and area code components</label>
        <input type="text" name="tel-local" id="tel-local" autoComplete="home tel-local" />
        <label htmlFor="tel-local-prefix">Local Prefix</label>
        <input type="text" name="tel-local-prefix" id="tel-local-prefix" autoComplete="home tel-local-prefix" />
        <label htmlFor="tel-local-suffix">Local Suffix</label>
        <input type="text" name="tel-local-suffix" id="tel-local-suffix" autoComplete="home tel-local-suffix" />
        <label htmlFor="tel-extension">Extension</label>
        <input type="text" name="tel-extension" id="tel-extension" autoComplete="home tel-extension" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="home email" />
        <label htmlFor="impp">Chat</label>
        <input type="url" name="impp" id="impp" autoComplete="home impp" />
      </fieldset>
      <input type="submit" value="Submit" name="submit" id="submit" />
    </form>
  );
}