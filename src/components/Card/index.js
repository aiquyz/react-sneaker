import React, { useState } from "react";
import styles from "./Card.module.scss";

console.log(styles);

function Card({ imageURL, title, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = useState(false);

  const onCLickPlus = () => {
    onPlus({imageURL, title, price})
    setIsAdded(!isAdded)
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/heart-unlike.svg" onClick={onFavorite} />
      </div>
      <img src={imageURL} alt="sneakers" width={133} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
          alt="plus"
          onClick={onCLickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
