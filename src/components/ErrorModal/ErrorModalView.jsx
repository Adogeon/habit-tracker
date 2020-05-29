import React from "react";

import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import styles from "./ErrorModal.module.css";

const ErrorModalView = ({ showModal, handleClose, error }) => (
  <Modal open={showModal} onClose={handleClose} className={styles.modalRoot}>
    <Paper className={styles.paperRoot}>
      <Grid container direction="column" justify="flex-start">
        <Typography variant="h3">Error</Typography>
        <Typography variant="body1">{error.code}</Typography>
        <Typography variant="body1">{error.message}</Typography>
      </Grid>
    </Paper>
  </Modal>
);

export default ErrorModalView;
