import iconStar from "../assets/icon-star.svg";
import React from "react";

interface Props {
  onClose: () => void;
  onSelect: (rating: number) => void;
  rating: number;
}

export default function FormCard({ onClose, onSelect, rating }: Props) {
  const handleButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onClose();
  };

  const nums = [1, 2, 3, 4, 5];

  return (
    <main>
      <div className="star-container">
        <img src={iconStar} alt="star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form>
        <div className="button-container">
          {nums.map((num) => (
            <button
              key={num}
              type="button"
              value={num}
              className={rating === num ? "checked btn-reset" : "btn-reset"}
              onClick={() => {
                onSelect(num);
              }}
            >
              {num}
            </button>
          ))}
        </div>
        <button className="btn-reset" onClick={handleButtonClick} type="submit">
          SUBMIT
        </button>
      </form>
    </main>
  );
}
