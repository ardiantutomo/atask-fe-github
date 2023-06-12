import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  const [query, setQuery] = useState<string>("");

  const search = async () => {};

  return <SearchForm query={query} setQuery={setQuery} search={search} />;
}

export default App;
