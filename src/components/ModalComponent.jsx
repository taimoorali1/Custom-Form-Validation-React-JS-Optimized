import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
  const { open, setOpen, values } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onHide={handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>User Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        UserName : {values.name}
        <br />
        Email : {values.email}
        <br />
        Joining Date : {values.date}
        <br />
        Password:{values.password}
        <br />
        Radio Option Selected : {values.radio} <br />
        <br />
        Selected Dropdown : {values.select} <br />
        <br />
        Comments : {values.textarea} <br />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
