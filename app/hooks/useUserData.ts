/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

// Define the type for user data (optional but good practice)
interface UserData {
  id: number;
  name: string;
  email: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUserData = () => {
  const { data, error } = useSWR<any>("/api/userData", fetcher);

  return {
    userData: data,
    isLoading: !error && !data,
    isError: error,
  };
};
