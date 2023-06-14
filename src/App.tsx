import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { Users, UsersResponse } from "./interface/user.interface";

function App() {
  const [query, setQuery] = useState<string>("");
  const [userData, setUserData] = useState<Users[] | undefined>();

  const search = async () => {
    fetch(`https://api.github.com/search/users?q=${query}&per_page=5`)
      .then((response: Response) => {
        return response.json();
      })
      .then((data: UsersResponse) => {
        setUserData(data.items);
      });
  };

  return (
    <div>
      <SearchForm query={query} setQuery={setQuery} search={search} />;
      <p>Showing user for "{query}"</p>
    </div>
  );
}

export default App;
