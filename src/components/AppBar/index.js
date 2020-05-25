import AppBarSimple from "./AppBarSimple.jsx";
import { connect } from "react-redux";
import { userLogOut } from "../../redux/action/user";

const mapStateToProps = (state) => ({
  auth: !state.firebase.auth.isEmpty,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => dispatch(userLogOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBarSimple);
