const Friends = ({ name, avatar, isOnline }) => {
  return (
    <li>
      <span class="status">{isOnline ? 'Онлайн' : 'Відсутній'}</span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default Friends;
