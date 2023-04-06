import { StyledSearchInput } from "./style";
import { useState } from "react";

export function SearchInput({ setSearchWord, search }) {
  const [searchedItem, setSearchedItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSearchWord(searchedItem);
    search(searchedItem);
    setSearchedItem("");
  }

  return (
    <StyledSearchInput onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchedItem}
        placeholder="Digitar pesquisa"
        onChange={(e) => setSearchedItem(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </StyledSearchInput>
  );
}
