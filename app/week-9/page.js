import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import { Link } from 'react-router-dom';

const AuthComponent = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Logout</button>
          <Link to="/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default AuthComponent;
