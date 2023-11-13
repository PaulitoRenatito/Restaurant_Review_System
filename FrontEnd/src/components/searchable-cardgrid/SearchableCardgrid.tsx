import { useState } from "react";
import { CardGrid } from "../card-grid/CardGrid";
import { SearchInput } from "../search-input/SearchInput";
import { filterCards } from "../card/Card";

interface SearchableCardgridProps {
    cards: any
}
export function SearchableCardgrid({ cards } : SearchableCardgridProps){

    const [searchText, setSearchText] = useState('');
    const foundCards = filterCards(cards, searchText);

    return(
        <>
            <SearchInput value={searchText} onChange={newText => setSearchText(newText)} />
            <CardGrid cards={foundCards}/>
        </>
    )
}
