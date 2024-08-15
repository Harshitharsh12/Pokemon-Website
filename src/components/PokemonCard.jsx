const PokemonCard = ({ data }) => {
  return (
    <div>
      <li className="pokemon-card">
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
          className="pokemon-image"
        />
        <h2 className="pokemon-name">{data.name}</h2>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {data.types
              .map((pData) => {
                return pData.type.name;
              })
              .join(" , ")}
          </p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span>Height: </span> {data.height / 10}m
          </p>
          <p className="pokemon-info">
            <span> HP:</span> {data.stats[0].base_stat}
          </p>
          <p className="pokemon-info">
            <span>Defense:</span> {data.stats[2].base_stat}
          </p>
          <p className="pokemon-info">
            <span>Speed:</span>
            {data.stats[5].base_stat}
          </p>
          <p className="pokemon-info">
            <span>Weight:</span> {data.weight / 10}kg
          </p>
          <p className="pokemon-info">
            <span>Attack:</span> {data.stats[1].base_stat}
          </p>
        </div>
      </li>
    </div>
  );
};

export default PokemonCard;
