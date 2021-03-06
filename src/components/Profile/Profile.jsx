import MyPostsContainer from "./MyPosts/MyPostsСontainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <div className={s.profile}>
         <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
         />
         <MyPostsContainer />
      </div>
   );
};

export default Profile;
