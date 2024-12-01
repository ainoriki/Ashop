import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function PaymentForm() {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async(event) => {
        event.preventDefault()

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
              return_url: "https://example.com/order/123/complete",
            },
          });


        if (result.error) {
            console.error(result.error.message);
          } else {
            // Send the token to your server for processing
          }
    }



    return(
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Pay</button>
        </form>
    )
}

export default PaymentForm