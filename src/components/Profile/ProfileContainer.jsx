import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
   getProfile,
   getStatus,
   updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
   componentDidMount() {
      if (this.props.match.params.userId) {
         this.props.history.push("/login");
      }
      this.props.getProfile(this.props.match.params.userId);
      this.props.getStatus(this.props.match.params.userId);
   }

   render() {
      return (
         <div>
            <Profile
               {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
            />
         </div>
      );
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
});
export default compose(
   connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);
