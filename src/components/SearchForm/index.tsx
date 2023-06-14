import { FormEvent } from "react";

type SearchFormProps = {
  query: string;
  setQuery: (input: string) => void;
  search: (event: FormEvent<HTMLFormElement>) => void;
};

const SearchForm = (props: SearchFormProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setQuery(event.target.value);
  };

  return (
    <form
      className="flex flex-col items-center space-y-4 py-2 px-4"
      onSubmit={props.search}
      method="#"
    >
      <input
        value={props.query}
        type="text"
        onChange={handleInputChange}
        placeholder="Enter username"
        className="w-full px-4 py-2 rounded-md border border-slate-300"
      />

      <button
        type="submit"
        className="w-full px-4 py-2 font-medium text-white bg-sky-700 rounded-md hover:bg-sky-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
