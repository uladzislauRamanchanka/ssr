import React, { useState } from "react";
import classes from "./AddMovieButton.module.css";
import ModalWindowWrapper from "../../ModalWindow/ModalWIndowWrapper/ModalWindowWrapper";
import ButtonModalContent from "./ButtonModalContent/ButtonModalContent";

const AddMovieButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className={classes.AddMovieButton}
        onClick={() => setShowModal(true)}
      >
        <span className={classes.ButtonText}>+ ADD MOVIE</span>
      </div>
      {showModal && (
        <ModalWindowWrapper
          onCloseRequest={() => setShowModal(false)}
          children={
            <ButtonModalContent
              title="ADD MOVIE"
              onCloseRequest={() => setShowModal(false)}
            />
          }
          isEditButton
        />
      )}
    </div>
  );
};

export default AddMovieButton;
