import { connect } from "react-redux";
import ErrorModalView from "./ErrorModalView";

import { CLOSE_ERROR_MODAL } from "../../redux/action/error";

const mapStateToProps = (state) => ({
  showModal: state.error.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch({ type: CLOSE_ERROR_MODAL }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModalView);
