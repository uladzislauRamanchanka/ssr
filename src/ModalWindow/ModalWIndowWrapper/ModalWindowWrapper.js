import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
  ModalOverlay,
  ModalWindow,
  ModalHeader,
  Cross,
  ModalBody,
} from "./style";

const ModalWindowWrapper = (props) => {
  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        27: () => {
          e.preventDefault();
          props.onCloseRequest();
          window.removeEventListener("keyup", handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [props.onCloseRequest]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
    };
  }, [handleKeyUp]);

  return (
    <>
      <ModalOverlay>
        <ModalWindow>
          <ModalHeader>
            <Cross onClick={props.onCloseRequest} />
          </ModalHeader>
          <ModalBody>{props.children}</ModalBody>
        </ModalWindow>
      </ModalOverlay>
    </>
  );
};

ModalWindowWrapper.propTypes = {
  onCloseRequest: PropTypes.func,
  children: PropTypes.element,
};

ModalWindowWrapper.defaultProps = {
  title: "Modal title",
  onCloseRequest: () => {},
  onSubmit: () => {},
};

export default ModalWindowWrapper;
