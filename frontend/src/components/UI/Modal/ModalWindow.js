import React, { useRef, useEffect } from "react";

import { ModalTemplates } from "./ModalTemplates/ModalTemplates";

import "./modalWindow.scss";

const ModalWindow = (props) => {

  useEffect(() => {
    if (Object.keys(props.info).length === 0) {
      document.removeEventListener("mousedown", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const modalRef = useRef((props.info && props.info.type) || "");

  if (Object.keys(props.info).length === 0) {
    return <div className="modal-window-wrapper empty" />;
  }

  return (
    <div className="modal-window-wrapper">
      <div className={"modal-window"} ref={modalRef}>
        <div className="modal-window-content">{ModalTemplates(props.info)}</div>
      </div>
    </div>
  );

  function onDiscard() {
    props.info.cbNo(props.info);
  }

  function handleClickOutside(event) {
    if (modalRef.current.contains(event.target)) {
      return;
    } else {
      onDiscard();
    }
  }
};

export default ModalWindow;
