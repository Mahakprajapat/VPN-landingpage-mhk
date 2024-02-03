import Review from "./Review";
import reviewData from "../assets/data";
import { useState } from "react";
export default function Temsi() {
  const [navPoints, setNavPoints] = useState(
    reviewData.map((_, i) => (
      <div
        key={i}
        className={i === 0 ? "selected-nav-point" : "nav-point"}
      ></div>
    ))
  );
  const [reviews, setReviews] = useState(
    reviewData.map((data, i) => {
      return (
        <Review
          key={data._id}
          {...data}
          style={i === 0 ? "selected-review" : ""}
        />
      );
    })
  );
  function updateReviews(direction) {
    if (direction > 0) {
      setReviews((prevReviews) =>
        prevReviews.map((review, i) =>
          review.props.style === "selected-review" ? (
            <Review
              key={review.key}
              {...review.props}
              style=""
              display="none"
            />
          ) : i ===
            direction +
              reviews.findIndex(
                (found) => found.props.style === "selected-review"
              ) ? (
            <Review
              key={review.key}
              {...review.props}
              style="selected-review"
            />
          ) : (
            review
          )
        )
      );
    } else {
      setReviews((prevReviews) =>
        prevReviews.map((review, i) =>
          review.props.display === "none" &&
          i ===
            direction +
              reviews.findIndex(
                (found) => found.props.style === "selected-review"
              ) ? (
            <Review
              key={review.key}
              {...review.props}
              display="block"
              style="selected-review"
            />
          ) : review.props.style === "selected-review" ? (
            <Review key={review.key} {...review.props} style="" />
          ) : (
            review
          )
        )
      );
    }
  }
  function updateNavPoints(direction) {
    setNavPoints((prevNavPoints) =>
      prevNavPoints.map((point, i) =>
        i ===
        direction +
          prevNavPoints.indexOf(
            prevNavPoints.find(
              (found) => found.props.className === "selected-nav-point"
            )
          ) ? (
          <div key={point.key} className="selected-nav-point"></div>
        ) : (
          <div key={point.key} className="nav-point"></div>
        )
      )
    );
  }
  return (
    <>
      <section className="reviews-section">
        <h2 className="section-title">
          Trusted by Thousands of Happy Customers
        </h2>
        <p className="section-subtitle">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        <div className="reviews-container">{reviews}</div>
        <div className="reviews-nav">
          <div className="reviews-nav-points">{navPoints}</div>
          <div className="reviews-nav-btn-wrapper">
            <button
              className={`reviews-nav-btn  ${
                navPoints[0].props.className === "selected-nav-point"
                  ? "hollow"
                  : "filled"
              }`}
              onClick={() => {
                if (navPoints[0].props.className !== "selected-nav-point") {
                  updateNavPoints(-1);
                  updateReviews(-1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Arrow Left</title>
                <desc>A line styled icon from Orion Icon Library.</desc>
                <path
                  data-name="layer2"
                  fill="none"
                  stroke="#202020"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M14 31.998h36"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
                <path
                  data-name="layer1"
                  fill="none"
                  stroke="#202020"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M28 18L14 32l14 14"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <button
              className={`reviews-nav-btn ${
                navPoints[navPoints.length - 1].props.className ===
                "selected-nav-point"
                  ? "hollow"
                  : "filled"
              }`}
              onClick={() => {
                if (
                  navPoints[navPoints.length - 1].props.className !==
                  "selected-nav-point"
                ) {
                  updateNavPoints(1);
                  updateReviews(1);
                }
              }}
            >
              <svg
                style={{ transform: "rotate(180deg)" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Arrow Left</title>
                <desc>A line styled icon from Orion Icon Library.</desc>
                <path
                  data-name="layer2"
                  fill="none"
                  stroke="#202020"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M14 31.998h36"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
                <path
                  data-name="layer1"
                  fill="none"
                  stroke="#202020"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M28 18L14 32l14 14"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div className="subscription-modal">
        <div className="modal-text">
          <h2 className="modal-title">
            Subscribe Now To Get Special Features!
          </h2>
          <p className="modal-subtitle">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <button className=" btn-filled modal-subscribe-btn">
          Subscribe Now
        </button>
      </div>
    </>
  );
}