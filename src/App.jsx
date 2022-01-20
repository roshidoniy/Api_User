import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterData from "./components/CharacterData";
import Search from "./components/Search";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bgImage, setBgImage] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      await axios(`https://www.breakingbadapi.com/api/characters`)
        .then((res) => {
          setItems(res.data);
          console.log(res.data);
        })
        .catch((err) => alert(err));

      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div
      className="container"
      // backgroundImage: `url("${bgImage}")`,
    >
      <div className="fixing"></div>
      <Search getData={(e) => setSearch(e)} />
      <CharacterData isLoading={isLoading} items={items} search={search} />
    </div>
  );
}

export default App;
