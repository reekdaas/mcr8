import { useParams } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { data } from "../../data/data";
import styles from "./eventPage.module.css";
import ButtonCard from "../../component/buttonCard/btnCard";
import { getDate, getTime } from "../../utils/getDate";
import SpeakerCard from "../../component/speakerCard/speakerCard";
import { useState } from "react";
import Modal from "../../component/modal/modal";

export default function EventPage() {
  const [showModal, setShowModal] = useState(false);
  const [rsvp, setRsvp] = useState(false);

  const { id } = useParams();
  const event = data.meetups.find((eve) => eve.id === id);

  const startDate = getDate(event.eventStartTime);

  const endDate = getDate(event.eventEndTime);
  const startTime = getTime(event.eventStartTime);
  const endTime = getTime(event.eventEndTime);

  return (
    <div className={styles.eventPage}>
      <div className={styles.eventInfo}>
        <h1>{event.title}</h1>
        <p>Hosted By: {event.hostedBy}</p>
        <img src={event.eventThumbnail} alt={event.title} />
        <h2>Details:</h2>
        <p>{event.eventDescription}</p>
        <h2>Additional Information</h2>
        <p className={styles.dress}>
          Dress Code: <span>{event.additionalInformation.dressCode}</span>
        </p>
        <p className={styles.ageInfo}>
          Age Restriction:{" "}
          <span>{event.additionalInformation.ageRestrictions}</span>{" "}
        </p>
        <h2>Event Tags:</h2>
        <div className={styles.tagInfo}>
          {event.eventTags.map((data) => (
            <ButtonCard data={data} key={data} />
          ))}
        </div>
      </div>
      <div>
        <div className={styles.eventTime}>
          <p>
            <span>
              <AiFillClockCircle />
            </span>
            {startDate} at {startTime} to {endDate} at {endTime}
          </p>
          <p>
            <span>
              <GrLocation />
            </span>
            Marketing City: {event.address}
            {}
          </p>
          <p>₹ {event.price}</p>
        </div>
        <div className={styles.speaker}>
          <h2>Speakers: ({event.speakers.length})</h2>
          <div className={styles.spakersInfo}>
            {event.speakers.map((data) => (
              <SpeakerCard data={data} key={data.name} />
            ))}
          </div>
        </div>
        {event.isPaid && (
          <div
            className={styles.rsvpBtn}
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
          >
            {rsvp ? (
              <ButtonCard data={"Already RSVPED"} />
            ) : (
              <ButtonCard data={"RSVP"} />
            )}
          </div>
        )}
      </div>
      {showModal && <Modal handleModal={setShowModal} setRsvp={setRsvp} />}
    </div>
  );
}
