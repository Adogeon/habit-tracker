import { connect } from "react-redux";
import UserAvatarView from "./UserAvartView";

const mapStateToProps = (state, props) => ({
  link: state.firebase.auth.photoURL,
  username: state.firebase.profile.username,
});

export default connect(mapStateToProps)(UserAvatarView);
