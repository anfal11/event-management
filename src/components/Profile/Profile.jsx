import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);

    const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    
    if (user) {
      setUserProfile({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      });
    }
  }, [user]);


    return (
        <div className="max-w-7xl mx-auto mt-36 lg:mt-10 h-screen">
            <img className="rounded-full mr-3 my-5" src={userProfile?.photoURL} />
            <h1 className="text-xl font-bold mr-3">{userProfile?.displayName}</h1>
            <p className="text-xl font-medium mr-3">{userProfile?.email}</p>
        </div>
    );
};

export default Profile;