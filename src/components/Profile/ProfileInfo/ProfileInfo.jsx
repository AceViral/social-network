import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHoooks from "./ProfileStatusWithHoooks";
const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />;
   }
   return (
      <div>
         <div className={s.descriptionBlock}>
            <img
               src={props.profile.photos.large}
               alt=""
               style={{ width: "200px" }}
            />
            <ProfileStatusWithHoooks
               status={props.status}
               updateStatus={props.updateStatus}
            />
            {/* <ProfileStatus
               status={props.status}
               updateStatus={props.updateStatus}
            /> */}

            <h3>Мое полное имя: {props.profile.fullName}</h3>
            <p>Обо мне: {props.profile.aboutMe}</p>
            <p>
               Ищу ли я работу?{" "}
               {props.profile.lookingForAJob ? (
                  <p>Да я ищу работу</p>
               ) : (
                  <p>Нет я не ищу работу</p>
               )}
            </p>
            <p>
               Что я делаю для этого? {props.profile.lookingForAJobDescription}
            </p>
            <h4>Мои контакты:</h4>
            <p>FaceBook: {props.profile.contacts.facebook}</p>
            <p>Мой сайт: {props.profile.contacts.website}</p>
            <p>VK: {props.profile.contacts.vk}</p>
            <p>Twitter: {props.profile.contacts.twitter}</p>
            <p>Instagram: {props.profile.contacts.instagram}</p>
            <p>Youtube: {props.profile.contacts.youtube}</p>
            <p>GitHub: {props.profile.contacts.github}</p>
         </div>
      </div>
   );
};

export default ProfileInfo;
