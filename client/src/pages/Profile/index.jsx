import React from "react";
import { useUserContext } from "/src/context/authContext";
import { TextReveal } from "/src/components/Reveal";
const Profile = () => {
  const { user } = useUserContext();
  const currentUser = user.user;
  console.log(user);
  return (
    <div className="pt-20 px-5 h-screen bg-white">
      <TextReveal>
        <h1 className=" font-helvetica text-3xl pb-8 whitespace-nowrap">
          Hello, {currentUser.name}
        </h1>
      </TextReveal>

      <TextReveal>
        <h2 className=" font-helvetica text-3xl inline">Your orders</h2>
      </TextReveal>
    </div>
  );
};

export default Profile;
