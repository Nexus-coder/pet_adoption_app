import Pet from "./Pet";

const Results = ({ pets }) => {
    return (<div className="search">
        {
            !pets.length ? (<p>No Results</p>) :
                (pets.map(pet => {
                    return (<Pet
                        id={pet.id}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        animal={pet.animal}
                        images={pet.images}
                        location={`${pet.city} ${pet.state}`}
                    />)
                }))
        }

    </div>)
}

export default Results