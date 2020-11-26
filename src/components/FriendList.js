import Friends from '../components/friend/friends';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friends
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
