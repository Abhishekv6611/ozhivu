import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import Loader from '../components/Loader';

const RequireAuth = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div><Loader/></div>;
  if (!isSignedIn) return <RedirectToSignIn />;

  return children;
};

export default RequireAuth;
