import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <Button primary onClick={handleClose}>I Accept</Button>;

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important aggrement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleOpen}>
        Open Modal
      </Button>
      {showModal && modal}

      <h2 className="text-xl my-3">Consectetur adipisicing elit</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <h2 className="text-xl my-3">Consectetur adipisicing elit</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <h2 className="text-xl my-3">Consectetur adipisicing elit</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <h2 className="text-xl my-3">Consectetur adipisicing elit</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident
        pariatur ad molestias, maxime cumque voluptates, obcaecati ut quia
        magnam harum. Sapiente inventore, mollitia dolorem nulla quibusdam quo
        possimus optio.
      </p>
    </div>
  );
}

export default ModalPage;
