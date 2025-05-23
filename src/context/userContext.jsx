// import { useUser } from '@clerk/clerk-react';
// import { createContext, useContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const { isSignedIn, user } = useUser();
//   const [customUser, setCustomUser] = useState(null);

//   useEffect(() => {
//     if (isSignedIn && user) {
//       setCustomUser({
//         id: user.id,
//         name: user.fullName,
//         email: user.primaryEmailAddress.emailAddress,
//       });
//     } else {
//       setCustomUser(null);
//     }
//   }, [isSignedIn, user]);

//   return (
//     <UserContext.Provider value={{ customUser, setCustomUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => useContext(UserContext);
