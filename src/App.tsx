import { useState } from "react";
import FormCard from "./components/FormCard";
import SubmitCard from "./components/SubmitCard";

export default function App() {
  const [visible, setVisibility] = useState(false);
  const [rating, setRating] = useState(0);
  const handleVisibility = () => setVisibility(!visible);
  const handleRating = (newRating: number) => setRating(newRating);

  return (
    <>
      {!visible && (
        <FormCard
          rating={rating}
          onSelect={handleRating}
          onSubmit={handleVisibility}
        />
      )}
      {visible && <SubmitCard rating={rating} onClose={handleVisibility} />}
    </>
  );
}
