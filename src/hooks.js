import { useState } from "react";

export function useFlip(facingUp) {
  const [isFacingUp, setIsFacingUp] = useState(facingUp);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  

  return [isFacingUp, flipCard];
}

