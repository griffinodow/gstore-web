import { SquarePaymentsForm, CreditCardInput } from 'react-square-web-payments-sdk'

export const SquareForm = ({ onSuccess }: { onSuccess: Function }) => {
  return (
    <SquarePaymentsForm
      /**
       * Identifies the calling form with a verified application ID
       * generated from the Square Application Dashboard.
       */
      applicationId='sandbox-sq0idb-PVaihHrfXBB_P0zI0UnQTg'
      /**
       * Invoked when payment form receives the result of a tokenize generation request.
       * The result will be a valid credit card or wallet token, or an error.
       */
      cardTokenizeResponseReceived={(token: any, buyer: any) => {
        console.info({ token, buyer })
        if (token.status === 'OK') {
          onSuccess(token.token)
        }
      }}
      /**
       * This function enable the Strong Customer Authentication (SCA) flow
       *
       * We strongly recommend use this function to verify the buyer and
       * reduce the chance of fraudulent transactions.
       */
      createVerificationDetails={() => ({
        amount: '1.00',
        /* collected from the buyer */
        billingContact: {
          addressLines: ['123 Main Street', 'Apartment 1'],
          familyName: 'Doe',
          givenName: 'John',
          countryCode: 'GB',
          city: 'London'
        },
        currencyCode: 'GBP',
        intent: 'CHARGE'
      })}
      /**
       * Identifies the location of the merchant that is taking the payment.
       * Obtained from the Square Application Dashboard - Locations tab.
       */
      locationId='LD8JQ3YKX8203'
    >
    <CreditCardInput />
  </SquarePaymentsForm>)
}
