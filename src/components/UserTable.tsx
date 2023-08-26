import pagination from "@/helpers/pagination";
import { UserData } from "@/types/types";
import React, { SyntheticEvent, useState } from "react";
import PaginationButton from "./PaginationButton";
import UserModal from "./UserModal";

type Props = {
  users: UserData[];
  setSearchValue: (searchValue: string) => void;
  favourites: UserData[];
  setFavourites: (user: UserData[]) => void;
  showFavourites: boolean;
};

const UserTable = ({
  users,
  setSearchValue,
  setFavourites,
  favourites,
  showFavourites,
}: Props) => {
  const [page, setPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const limit = 10;
  const selectedUsers = pagination(users, page, limit);

  const handleSearch = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchValue(target.value);
  };
  const openModal = (user: UserData) => {
    setShowModal(true);
    setSelectedUser(user);
  };

  const handleAddToFavourites = (user: UserData) => {
    if (!favourites.includes(user)) {
      const newFavourites = [...favourites, user];
      setFavourites(newFavourites);
    }
  };
  const handleRemoveFromFavourites = (user: UserData) => {
    if (favourites.indexOf(user) === -1) return null;
    const newFavourites = favourites.filter((favUser) => favUser !== user);
    setFavourites(newFavourites);
  };

  const isFavourite = (user: UserData) => {
    if (favourites.indexOf(user) === -1) return false;
    return true;
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden"></div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between bg-white p-4 dark:bg-gray-800">
          <h1 className="text-base font-semibold text-gray-900 dark:text-white">
            {showFavourites ? "Favourites" : "Users"}
          </h1>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for users"
              onChange={handleSearch}
            />
          </div>
        </div>
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3" data-testid="name-header-testid">
                Name
              </th>
              <th scope="col" className="px-6 py-3" data-testid="city-header-testid">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedUsers.length ? (
              selectedUsers.map((user: UserData, i: number) => (
                <tr
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                  key={`user_${i}`}
                  onClick={(e) => {
                    const element = e.target as HTMLElement;
                    if (element.tagName.toLowerCase() !== "button") {
                      openModal(user);
                    }
                  }}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox_${i}`}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label htmlFor={`checkbox_${i}`} className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.picture.thumbnail}
                      alt={`${user.name.first}-profile`}
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</div>
                      <div className="font-normal text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{user.location.city}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        isFavourite(user)
                          ? handleRemoveFromFavourites(user)
                          : handleAddToFavourites(user)
                      }
                      type="button"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      {isFavourite(user)
                        ? "Remove from favourites"
                        : "Add to favourites"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                key="1"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
                >
                  <img
                    className="h-10 w-10 rounded-full"
                    src=""
                    alt="default image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      No users found
                    </div>
                    <div className="font-normal text-gray-500"></div>
                  </div>
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <button
                    disabled={true}
                    type="button"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Add to favourites
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <PaginationButton
          page={page}
          setPage={setPage}
          numberOfUsers={showFavourites ? favourites.length : users.length}
        />
      </div>
      {selectedUser ? (
        <UserModal
          user={selectedUser}
          showModal={showModal}
          setShowModal={setShowModal}
          addToFavourites={handleAddToFavourites}
          removeFromFavourites={handleRemoveFromFavourites}
          isFavourite={isFavourite(selectedUser)}
        />
      ) : null}
    </>
  );
};

export default UserTable;
