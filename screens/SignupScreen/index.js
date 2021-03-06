import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      signup: (personInfo) => {
        return dispatch(userActions.signup(personInfo));
      }
    };
  };


export default connect(null, mapDispatchToProps)(Container);