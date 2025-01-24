import { FaStar } from "react-icons/fa";
export default function Stars({rating}) {
    const ratStars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratStars.push(<FaStar key={i} color="#FFC600" />);
      } else {
        ratStars.push(<FaStar key={i} />);
      }
    }
    return (<div className="flex">{ratStars}</div>)
}
