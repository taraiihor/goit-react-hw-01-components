import SocialProfileList from './components/SocialProfileList';
import users from './components/social-profile/user.json';
import FriendList from './components/FriendList';
import friends from './components/friend/friends.json';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/TransactionHistory';
export default function App() {
  return (
    <div>
      <TransactionHistory items={transactions} />
    </div>
  );
}

// <SocialProfileList user={users} />;
// <FriendList friends={friends} />;
