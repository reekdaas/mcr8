import { useNavigate } from "react-router-dom";
import styles from "./eventcard.module.css";
import { getDate } from "../../utils/getDate";

export default function EventCard({ data }) {
  const navigate = useNavigate();

  const date = getDate(data.eventStartTime);

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/${data?.id}`);
      }}
    >
      <div className={styles.imageCard}>
        <img src={data.eventThumbnail} alt={data.title} />
        <p className={styles.eventtype}>{data.eventType}</p>
      </div>
      <p>{date}</p>
      <h3>{data.title}</h3>
    </div>
  );
}
