import styles from "./btnCard.module.css";

export default function ButtonCard({ data }) {
  return <p className={styles.card}>{data}</p>;
}
