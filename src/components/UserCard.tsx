import { UserData } from "@/types/types";
import formatDate from "../helpers/formatDate";

type Props = {
  user: UserData;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="m-4 space-y-6">
      <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          className="h-56 w-full object-cover object-center"
          src={user.picture.large}
          alt="avatar"
        />
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          <p className="py-2 text-lg text-gray-700"></p>
          <div className="mt-4 flex items-center text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
            </svg>
            <h1 className="px-2 text-sm">{`${user.location.city}, ${user.location.country}`}</h1>
          </div>
          <div className="mt-4 flex items-center text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
            </svg>
            <h1 className="px-2 text-sm">{user.email}</h1>
          </div>
          <div className="mt-4 flex items-center text-gray-700">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
            </svg>
            <h1 className="px-2 text-sm">{user.phone}</h1>
          </div>
          <div className="mt-4 flex items-center text-gray-700">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 122.83 122.88"
            >
              <g>
                <path d="M81.53,4.71c0-2.62,2.58-4.71,5.77-4.71c3.2,0,5.77,2.13,5.77,4.71V25.4c0,2.62-2.58,4.71-5.77,4.71 c-3.2,0-5.77-2.13-5.77-4.71V4.71L81.53,4.71z M46.21,85.9h10.78V73.6c0-0.95,0.78-1.72,1.72-1.72h5.41c0.95,0,1.72,0.78,1.72,1.72 v12.3h10.78c4.64,0,8.44,3.8,8.44,8.45v8.54h4.69c1.49,0,2.71,1.21,2.71,2.71c0,1.49-1.21,2.71-2.71,2.71H33.07 c-1.49,0-2.71-1.21-2.71-2.71c0-1.49,1.21-2.71,2.71-2.71h4.69v-8.54C37.77,89.7,41.57,85.9,46.21,85.9L46.21,85.9z M61.42,58.26 c0.93,4.14,3.74,6.21,3.74,8.29c0,2.07-0.93,4.14-3.74,4.14c-2.8,0-3.74-2.07-3.74-4.14C57.68,64.48,60.48,62.41,61.42,58.26 L61.42,58.26z M29.53,4.71C29.53,2.09,32.11,0,35.3,0c3.2,0,5.77,2.13,5.77,4.71V25.4c0,2.62-2.58,4.71-5.77,4.71 c-3.2,0-5.77-2.13-5.77-4.71V4.71L29.53,4.71z M7.56,44.09h107.62V22.66c0-0.8-0.31-1.55-0.84-2.04c-0.53-0.53-1.24-0.84-2.04-0.84 h-9.31c-1.78,0-3.2-2.63-3.2-4.41c0-1.78,1.42-3.2,3.2-3.2h10.52c2.58,0,4.88,1.07,6.57,2.75c1.69,1.69,2.75,4.04,2.75,6.57v92.06 c0,2.58-1.07,4.88-2.75,6.57c-1.69,1.69-4.04,2.75-6.57,2.75H9.33c-2.58,0-4.88-1.07-6.57-2.75C1.07,118.44,0,116.08,0,113.55 V21.49c0-2.58,1.07-4.88,2.75-6.57c1.69-1.69,4.04-2.75,6.57-2.75h11.28c1.78,0,3.2,1.42,3.2,3.2c0,1.78-1.42,4.41-3.2,4.41H10.54 c-0.8,0-1.55,0.31-2.09,0.84c-0.53,0.53-0.84,1.24-0.84,2.09v21.43L7.56,44.09L7.56,44.09L7.56,44.09z M115.18,52.9H7.56v59.39 c0,0.8,0.31,1.55,0.84,2.09c0.53,0.53,1.24,0.84,2.09,0.84l101.76,0c0.8,0,1.55-0.31,2.09-0.84c0.53-0.53,0.84-1.24,0.84-2.09V52.9 L115.18,52.9z M50.36,19.73c-1.78,0-3.2-2.63-3.2-4.41c0-1.78,1.42-3.2,3.2-3.2h21.49c1.78,0,3.2,1.42,3.2,3.2 c0,1.78-1.42,4.41-3.2,4.41H50.36L50.36,19.73z" />
              </g>
            </svg>
            <h1 className="px-2 text-sm">{`${formatDate(user.dob.date)}, Age: ${
              user.dob.age
            }`}</h1>
          </div>
          <div className="mt-4 flex items-center text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
              <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
              <g>
                <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
              </g>
            </svg>
            <h1 className="px-2 text-sm">{user.gender}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
