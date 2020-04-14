import React, { useState } from "react";
import FillSecurityQuestions from "screens/resetPasswordProcess/FillSecurityQuestions";
import SendResetInstructions from "screens/resetPasswordProcess/SendResetInstructions";
import CodeVerification from "screens/resetPasswordProcess/CodeVerification";

export default function MainResetPasswordScreen() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState(null);
  const [securityQuestions, setSecurityQuestions] = useState(null);

  const nextStep = () => {
    setCount(count + 1);
  };

  const screens = [
    <SendResetInstructions
      setEmail={(value) => setEmail(value)}
      nextStep={() => nextStep()}
    />,
    <CodeVerification
      setSecurityQuestions={(val) => setSecurityQuestions(val)}
      email={email}
      nextStep={() => nextStep()}
    />,
    <FillSecurityQuestions
      securityQuestions={securityQuestions}
      email={email}
      nextStep={() => nextStep()}
    />,
  ];

  return screens[count];
}
