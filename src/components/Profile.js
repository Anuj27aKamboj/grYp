import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Profile = () => {
  const { loggedInUser, setUserDetails } = useContext(UserContext);

  return (
    <div className="w-6/12 p-5 mx-auto mt-[100px] text-center">
      <div className="w-full mx-auto my-5 ">
        <h1 className="font-extrabold text-3xl">
          {loggedInUser}
        </h1>
        <p>{loggedInUser.email}</p>
      </div>
      <div>
        <input
          type="text"
          className="py-0.5 px-2.5 mx-[5px] border border-gray-300 rounded"
          value={loggedInUser}
          onChange={(e) => {
            setUserDetails(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Profile;
