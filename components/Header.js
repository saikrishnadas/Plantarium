import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import styles from "../styles/Header.module.css";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  return (
    <div className={styles.container} style={{ color: "white" }}>
      <div className={styles.order__now}>
        <HomeIcon />
      </div>

      <div className={styles.center__container}>
        <div className={styles.center__left}>
          <p>Hompage</p>
          <p>Products</p>
          <p>Menu</p>
        </div>
        <p className={styles.logo}>PLANTARIUM</p>
        <div className={styles.center__right}>
          <p>Events</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>

      <div className={styles.cart__icon}>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;
