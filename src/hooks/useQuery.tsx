import { UserData, UserResponse } from "@/types/types";
import { useEffect, useState } from "react";

const useQuery = (url: string) => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
        throw new Error("Failed to fetch data");
      }

      const data: UserResponse = await response.json();
      setData(data.results);
      setLoading(false);
    } catch (error) {
      throw new Error(`Error fetching user data`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useQuery;
