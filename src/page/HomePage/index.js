import { connect } from "react-redux";
import HomePageView from "./HomePageView";

export default connect((state) => ({
  uid: state.firebase.auth.uid,
  profile: state.firebase.profile,
}))(HomePageView);
