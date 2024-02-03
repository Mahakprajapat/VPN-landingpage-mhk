import star from "../assets/star.svg";
export default function Review(props) {
  const { avatar, fullName, location, rating, text, style, display } = props;
  return (
    <div
      style={{ display: `${display}` }}
      className={`review-wrapper ${style}`}
    >
      <div className="review-info">
        <img className="review-avatar" src={require('../assets/review-1.png')} />
        <div className="review-personal">
          <p className="bold-light-small review-name">{fullName}</p>
          <p>{location}</p>
        </div>
        <div className="review-rating">
          <p>{rating}</p>
          <img className="review-star" src={star} />
        </div>
      </div>
      <p className="review-text">{text}</p>
    </div>
  );
}