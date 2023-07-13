import styles from "./speaker.module.css";

export default function SpeakerCard({ data }) {
  return (
    <div className={styles.speakerCard}>
      <img src={data.image} alt={data.name} />
      <p>{data.name}</p>
      <p>{data.designation}</p>
    </div>
  );
}
