// import React from "react";
// import { View, Text } from "react-native";
// import StripeCheckout from "expo-stripe-checkout";
// const Payment = () => {
//   const onPaymentSuccess = (token) => {
//     console.log(token);
//   };

//   const onClose = () => {
//     console.log("close");
//   };
//   return (
//     <>
//       <StripeCheckout
//         publicKey="pk_test_W3Yussfdkrh9BeFLS0CCXmbK00TFP53PM9"
//         amount={100000}
//         imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
//         storeName="Stripe Checkout"
//         description="Test"
//         currency="USD"
//         allowRememberMe={false}
//         prepopulatedEmail="test@test.com"
//         onClose={() => onClose()}
//         onPaymentSuccess={(token) => onPaymentSuccess(token)}
//       />
//     </>
//   );
// };

// export default Payment;
import React from "react";
import { View, Text } from "react-native";

const Payment = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Payment;
