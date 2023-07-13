import EventCard from "../component/eventcard/eventCard";
import { useAppContext } from "../context/appContext";
import { data } from "../data/data";
import Filter from "../utils/filter";
import styles from "./homePage.module.css";

export default function HomePage() {
  const { initialSearchvalue, searchDispatch } = useAppContext();

  const handleChangeSelctChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    searchDispatch({ type: "FILTER_SELECT", payload: value });
  };

  const newData = Filter(data.meetups, initialSearchvalue);
  console.log(newData);

  return (
    <div className={styles.homePage}>
      <div>
        <div className={styles.homePageHeading}>
          {" "}
          <h1>Meetup Events</h1>
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
          {newData?.length > 0 ? (
            <>
              {" "}
              {newData?.map((value) => (
                <EventCard data={value} key={value.id} />
              ))}
            </>
          ) : (
            <h1>No Event Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
