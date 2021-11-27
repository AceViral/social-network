import React, { useEffect, useState } from "react";

const ProfileStatusWithHoooks = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);
   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);
   const toggleEditMode = () => {
      setEditMode(!editMode);
      props.updateStatus(status);
   };
   const onStatusChange = (e) => {
      setStatus(e.target.value);
   };
   return (
      <div>
         {editMode ? (
            <div>
               <input
                  onChange={onStatusChange}
                  autoFocus={true}
                  value={status}
                  onBlur={toggleEditMode}
               />
            </div>
         ) : (
            <div>
               <span onDoubleClick={toggleEditMode}>
                  {status || "NO STATUS"}
               </span>
            </div>
         )}
      </div>
   );
};

export default ProfileStatusWithHoooks;
