import Profile from '../components/social-profile/Profile';
function ProfileList({ user }) {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default ProfileList;
