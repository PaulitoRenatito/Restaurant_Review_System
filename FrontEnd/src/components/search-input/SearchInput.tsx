import { ChangeEvent } from "react"
import "./search-input.css"


interface SearchInputProps {
    value?: string,
    onChange?: (newText:string) => void
}
export function SearchInput({value, onChange} : SearchInputProps) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(event.target.value)
        }
    }

    return(
        <div className="search-container">
            <i className="fa fa-search"/>
            <input className="search-input" type="search" placeholder="Pesquisar..." value={value} onChange={handleChange}/>
        </div>
    )
}