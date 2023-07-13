import { useAppContext } from "../../context/appContext";
import styles from "./header.module.css";

export default function Header() {
  const { initialSearchvalue, searchDispatch } = useAppContext();
  const handleChange = (e) => {
    searchDispatch({ type: "FILTER_SEARCH", payload: e.target.value });
  };
  return (
    <div className={styles.header}>
      <h2>Meetup</h2>

      <input
        type="text"
        name="search"
        value={initialSearchvalue.filterBySearch}
        onChange={handleChange}
        placeholder="Search By Name...."
      />
    </div>
  );
}
