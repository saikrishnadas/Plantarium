import styles from "../styles/Home.module.css";
function Words() {
  return (
    <div className={styles.wordings}>
      <h1 className={styles.wordings__heading}>THE BEST PLANT IN TOWN</h1>
      <div className={styles.wordings__words__container}>
        <h3 className={styles.wordings__words}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu in pretium molestie. Interdum et malesuada fames acme. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
    </div>
  );
}

export default Words;
