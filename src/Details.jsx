import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import Modal from "./Modal";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  // top of Details function body
const navigate = useNavigate();
const [, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">😂</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />;
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>;
        <p>{pet.description}</p>
      </div>
      {
  showModal ? (
    <Modal>
      <div>
        <h1>Would you like to adopt {pet.name}?</h1>
        <div className="buttons">
        <button
  onClick={() => {
    setAdoptedPet(pet);
    navigate("/");
  }}
>
  Yes
</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      </div>
    </Modal>
  ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
}
    </div>
  );
};

// add import
import ErrorBoundary from "./ErrorBoundary";

// replace export
export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details  />
    </ErrorBoundary>
  );
}