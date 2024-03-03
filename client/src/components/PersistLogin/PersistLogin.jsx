import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "/src/context/authContext";
import { useRefreshToken } from "/src/hooks";
import axios from "/src/api/axios";
import _ from "lodash";

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const verifyRefresh = async () => {
      try {
        const newAccessToken = await refresh();
        if (newAccessToken) {
          // Get the user from the new access token
          const response = await axios.get("/users/current", {
            headers: {
              authorization: `Bearer ${newAccessToken}`,
            },
          });

          // Get the user from the database
          const fetchedUser = await axios.get(`/users/${response.data.id}`, {
            headers: {
              authorization: `Bearer ${newAccessToken}`,
            },
          });

          // Compare the user from the response and the user from the fetchedUser
          // If they are the same, set the user from the response
          // If they are different, set the user from the fetchedUser
          // This is to prevent the user from having stale data

          if (_.isEqual(fetchedUser.data, response.data)) {
            setUser({
              accessToken: newAccessToken,
              user: response.data,
            });
          } else {
            setUser({
              accessToken: newAccessToken,
              user: fetchedUser.data,
            });
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    !user?.accessToken ? verifyRefresh() : setIsLoading(false);
  }, []);

  return <Outlet />;
}

export default PersistLogin;
