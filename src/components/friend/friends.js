import './Friends.css';
import PropTypes from 'prop-types';
const Friends = ({ name, avatar, isOnline }) => {
  return (
    <li className="Container__friends">
      <span className={isOnline ? 'Status' : 'offStatus'}></span>
      <img className="Avatar" src={avatar} alt="" width="48" />
      <p className="Name">{name}</p>
    </li>
  );
};
Friends.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default Friends;
