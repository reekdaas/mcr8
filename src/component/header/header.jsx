import styles from "./header.module.css";

export default function Header() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.header}>
      <h2>Meetup</h2>
      <div>
        <input type="text" name="search" value="" onChange={handleChange} />
      </div>
    </div>
  );
}
