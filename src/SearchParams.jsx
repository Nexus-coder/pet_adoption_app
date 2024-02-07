import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Results from './Results';
import useBreedList from './useBreedList';
import fetchSearch from './fetchSearch';
const Animals = ["dog", "bird", "reptile", "rabbit", "cat"];

const SearchParams = () => {
    const [adoptedPet] = useContext(AdoptedPetContext);
    const [requestParams,setRequestParams] = useState({
        animal:"",
        location:"",
        breed:""
    })
    const [animal, setAnimal] = useState(""); 
    const [breeds] = useBreedList(animal);

    const results = useQuery(["search",requestParams],fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        < div className="search-params" >
            <form action=""
                onSubmit={e => {
                    e.preventDefault();
                    const data = new FormData(e.target);
                    const obj = {
                        animal:  data.get("animal") ?? "",
                        location:data.get("location") ?? "",
                        breed:data.get("breed") ?? ""

                    }
                    setRequestParams(obj)
                }}>
                    {
  adoptedPet ? (
    <div className="pet image-container">
      <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
    </div>
  ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
}
                <label htmlFor="location">
                    Location
                    <input 
                     id="location"
                     name="location"
                     placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        onChange={e => {
                            setAnimal(e.target.value)
                        }}
                        name="animal"
                        id="animal">
                        <option />
                        {
                            Animals.map(animal => <option key={animal} value={animal}>{animal}</option>)
                        }
                    </select>
                </label>

                <label htmlFor="breeds">
                    Breeds
                    <select
                    disabled={!breeds.length} 
                        name="breed"
                        id="breeds">
                        <option />
                        {
                            breeds.map(breed => <option key={breed}>{breed}</option>)
                        }
                    </select>
                </label>

                <button>Submit</button>
            </form>
            <Results pets = {pets}/>
        </div >
    )
}

export default SearchParams;
