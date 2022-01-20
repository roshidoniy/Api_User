import CharacterItem from "./CharacterItem";

const CharacterData = ({ isLoading, items, search }) => {
  return isLoading ? (
    <h1 style={{ background: "#333" }}>
      Loading... Loading... Loading... Loading... Loading... Loading...
      Loading... Loading... Loading... Loading... Loading... Loading...
      Loading... Loading...
    </h1>
  ) : (
    <div>
      <section className="cards">
        {items
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((data, id) => (
            <CharacterItem data={data} key={data.char_id} />
          ))}
      </section>
    </div>
  );
};

export default CharacterData;
