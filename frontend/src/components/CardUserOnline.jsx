import "./CardUserOnline.css";

export const CardUserOnline = ({ url, user }) => {
  return (
    <div className="card-info-user">
      <img src={url} alt="" />
      <b>{user}</b>
    </div>
  );
};
