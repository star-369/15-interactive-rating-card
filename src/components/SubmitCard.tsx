import "../css/style.css";
import illustration from "../assets/illustration-thank-you.svg";

interface Props {
  rating: number;
  onClose: () => void;
}

export default function SubmitCard({ rating, onClose }: Props) {
  return (
    <section onClick={() => onClose()}>
      <img src={illustration} alt="" />
      <div>
        <p>You selected {rating} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
}
