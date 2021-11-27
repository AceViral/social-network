import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" />
      <div className={s.frame}>
        <p>{props.text}</p>
      </div>
      <h6>
        <img
          src="https://cdn-icons.flaticon.com/png/512/880/premium/880452.png?token=exp=1634474564~hmac=90221513cf36b1d73cf87ccf2d86bb47"
          alt=""
        />
        {props.likesCount}
      </h6>
    </div>
  );
};

export default Post;
