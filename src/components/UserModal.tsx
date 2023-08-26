/* eslint-disable react/prop-types */
import { UserData } from "@/types/types";
import { Button, Modal } from "flowbite-react";
import UserCard from "./UserCard";

type Props = {
  user: UserData;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  removeFromFavourites: (user: UserData) => void;
  addToFavourites: (user: UserData) => void;
  isFavourite: boolean;
};

const UserModal = ({
  user,
  showModal,
  setShowModal,
  removeFromFavourites,
  addToFavourites,
  isFavourite,
}: Props) => {
  return (
    <>
      <Modal
        size={"md"}
        dismissible
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header className="p-4">User Profile</Modal.Header>
        <Modal.Body>
          <UserCard user={user} />
        </Modal.Body>
        <Modal.Footer>
          {!isFavourite ? (
            <Button
              className="m-2"
              onClick={() => {
                addToFavourites(user);
              }}
            >
              Add to favourites
            </Button>
          ) : (
            <Button
              className="m-2"
              onClick={() => {
                removeFromFavourites(user);
              }}
            >
              Remove from favourites
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserModal;
