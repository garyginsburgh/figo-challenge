import UserTable from "./UserTable";
import LoadingSpinner from "./LoadingSpinner";
import useQuery from "../hooks/useQuery";
import Header from "./Header";
import { useState } from "react";
import { UserData } from "@/types/types";

const App = () => {
  const url: string = "https://randomuser.me/api/?results=50";

  const { data, loading, error } = useQuery(url);
  const [searchValue, setSearchValue] = useState<string>("");
  const [favourites, setFavourites] = useState<UserData[]>([]);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  const filterUsers = () => {
    return data.filter((user: UserData) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const search = searchValue.toLowerCase();
      return fullName.includes(search);
    });
  };
  const filterFavourites = () => {
    return favourites.filter((user: UserData) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const search = searchValue.toLowerCase();
      return fullName.includes(search);
    });
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p>something went wrong...</p>;
  return (
    <>
      <Header
        showFavourites={showFavourites}
        setShowFavourites={setShowFavourites}
      />
      <UserTable
        users={showFavourites ? filterFavourites() : filterUsers()}
        setSearchValue={setSearchValue}
        setFavourites={setFavourites}
        favourites={favourites}
        showFavourites={showFavourites}
      />
    </>
  );
};

export default App;
