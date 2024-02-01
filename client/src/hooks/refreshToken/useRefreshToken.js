import axios from "/src/api/axios";
import { useUserContext } from "/src/context/authContext";

function useRefreshToken() {
  const { setUser } = useUserContext();

  const refresh = async () => {
    const response = await axios.get("/refresh", { withCredentials: true });
    setUser((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };

  return refresh;
}

export default useRefreshToken;
