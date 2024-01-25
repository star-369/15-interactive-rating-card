import { useState } from "react";
import FormCard from "./components/FormCard";
import SubmitCard from "./components/SubmitCard";

export default function App() {
  const [IsVisible, setVisibility] = useState(false);
  const [hasRating, setRating] = useState(0);
  const handleVisibility = () => setVisibility(!IsVisible);
  const handleRating = (rating: number) => setRating(rating);

  return (
    <>
      {!IsVisible && (
        <FormCard
          rating={hasRating}
          onSelect={handleRating}
          onClose={handleVisibility}
        />
      )}
      {IsVisible && (
        <SubmitCard rating={hasRating} onClose={handleVisibility} />
      )}
    </>
  );
}
