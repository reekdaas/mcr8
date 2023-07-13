import EventCard from "../component/eventcard/eventCard";
import { data } from "../data/data";
import styles from "./homePage.module.css";

export default function HomePage() {
  const handleChangeSelctChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <div className={styles.homePage}>
      <div>
        <div className={styles.homePageHeading}>
          {" "}
          <h1>Meetup Events</h1>
          {/* 
            <select
            type="select"
            name="rating"
            value={userReview?.rating}
            onChange={handleChange}
          >
            {" "}
            {values.map((val) => (
              <option value={val}> {val} </option>
            ))}
          </select>
          */}
          <select
            type="select"
            name="category"
            onChange={handleChangeSelctChange}
          >
            <option value="both">Both</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
        </div>

        <div className={styles.cardContainer}>
          {data.meetups.map((value) => (
            <EventCard data={value} key={value.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
