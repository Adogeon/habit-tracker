import React from "react";

import Modal from "@material-ui/core/Modal";

const ErrorModalView = ({ showModal, handleClose }) => (
  <Modal open={showModal} onClose={handleClose}>
    <div>Hello, I am an Error Modal</div>
  </Modal>
);

export default ErrorModalView;
