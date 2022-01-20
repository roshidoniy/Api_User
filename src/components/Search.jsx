import { useRef } from "react";
const Search = ({ getData }) => {
  const inputRef = useRef();

  return (
    <div>
      <section className="search">
        <form>
          <input
            ref={inputRef}
            type="text"
            name=""
            placeholder="Search Characters"
            onChange={() => {
              getData(inputRef.current.value);
            }}
            className="formcontrol"
          />
        </form>
      </section>
    </div>
  );
};

export default Search;
