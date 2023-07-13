import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import ButtonCard from "../buttonCard/btnCard";
export default function Modal({ handleModal, setRsvp }) {
  return createPortal(
    <div className={styles.editModal}>
      <div
        className={styles.modalOverlay}
        onClick={() => {
          handleModal(false);
        }}
      ></div>
      <div className={styles.editModalContainer}>
        <div className={styles.editModalHeader}>
          <p>Complete Your RSVP</p>
          <p>Fill In Your Personal Information</p>
        </div>
        <div className={styles.editInfoRow}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.editInfoRow}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </div>
        <p>*You Have To make the payment at venue</p>
        <div
          className={styles.btn}
          onClick={() => {
            setRsvp(true);
            handleModal(false);
          }}
        >
          {" "}
          <ButtonCard data={"RSVP"} />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
