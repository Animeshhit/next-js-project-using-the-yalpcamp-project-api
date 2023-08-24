import Link from "next/link";
import Styles from "./Card.module.css";

const Card = (props) => {
  function trimWord(word, maxLength = 90) {
    if (word.length <= maxLength) {
      return word;
    } else {
      return word.substring(0, maxLength - 3) + "...";
    }
  }
  return (
    <div className={Styles.card}>
      <img
        className={Styles.cardImage}
        loading="lazy"
        src={props.image}
        alt="demo image of campground"
      />
      <h2 className={Styles.cardHeading}>{props.title}</h2>
      <p className={Styles.cardPara}>{trimWord(props.description)}</p>
      <button className={Styles.cardButton} type="button">
        <Link href={`/post/${props.id}`}>View Campground</Link>
      </button>
    </div>
  );
};

export default Card;
