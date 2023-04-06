import {StyledHeader} from "./styled"
import { Logo } from "../Logo/Logo"
import { SearchInput } from "../SeachInput/SearchInput"


export function Header({setSearchProducts,search,getProducts, cleanSearch, setSearchWord,darkMode}){
    return(
        <StyledHeader>
            <Logo/>
            <button onClick={darkMode}>Dark</button>
            <SearchInput setSearchProducts={setSearchProducts} search={search} getProducts={getProducts} cleanSearch={cleanSearch} setSearchWord={setSearchWord}/>
        </StyledHeader>
    )
}