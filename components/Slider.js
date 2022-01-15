import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import arrowl from "../public/arrowl.png";
import arrowr from "../public/arrowr.png";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/c/r/crassulagreenmini_45.png",
    "https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/m/o/moneygolden_45_1.png",
    "https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/z/a/zamiazz_45_1.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src={arrowl} alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src={arrowr} layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
