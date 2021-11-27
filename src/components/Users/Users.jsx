import s from "./Users.module.css";
import userPhoto from "../../assets/images/person.png";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

let Users = (props) => {
   return (
      <div>
         <Paginator
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
         />
         {props.users.map((users) => (
            <div key={users.id}>
               <span>
                  <div>
                     <NavLink to={"/profile/" + users.id}>
                        <img
                           src={
                              users.photos.small != null
                                 ? users.photos.small
                                 : userPhoto
                           }
                           className={s.userPhoto}
                        />
                     </NavLink>
                  </div>
                  <div>
                     {users.followed ? (
                        <button
                           disabled={props.followingInProgress.some(
                              (id) => id === users.id
                           )}
                           onClick={() => {
                              props.unfollow(users.id);
                           }}
                        >
                           Unfollow
                        </button>
                     ) : (
                        <button
                           disabled={props.followingInProgress.some(
                              (id) => id === users.id
                           )}
                           onClick={() => {
                              props.follow(users.id);
                           }}
                        >
                           Follow
                        </button>
                     )}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{users.name}</div>
                     <div>{users.status}</div>
                  </span>
                  <span></span>
               </span>
            </div>
         ))}
      </div>
   );
};

export default Users;
