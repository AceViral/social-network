import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   };
   toggleEditMode = () => {
      this.setState({
         editMode: !this.state.editMode,
      });
      this.props.updateStatus(this.state.status);
   };
   onStatusChange = (e) => {
      this.setState({ status: e.target.value });
   };
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({ status: this.props.status });
      }
   }
   render() {
      return (
         <div>
            {this.state.editMode ? (
               <div>
                  <input
                     onChange={this.onStatusChange}
                     autoFocus={true}
                     value={this.state.status}
                     onBlur={this.toggleEditMode}
                  />
               </div>
            ) : (
               <div>
                  <span onDoubleClick={this.toggleEditMode}>
                     {this.state.status || "NO STATUS"}
                  </span>
               </div>
            )}
         </div>
      );
   }
}

export default ProfileStatus;
