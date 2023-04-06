import { StyledSearchResultBar } from "./style";

export function SearchResultBar({cleanSearch,searchWord}){
    return(
        <StyledSearchResultBar>
            <h2>Resultado para: <span> {searchWord} </span></h2>
            <button onClick={()=>cleanSearch()}>Limpar busca</button>
        </StyledSearchResultBar>
    )
}