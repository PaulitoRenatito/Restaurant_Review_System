import './price-range-input.css'

interface PriceRangeInputProps {
    value: [number, number];
    updateValue(value: [number, number]): void;
}
export function PriceRangeInput({ value, updateValue }: PriceRangeInputProps) {

    const handlePriceFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputType = event.target.name;
        const newValue = parseFloat(event.target.value);

        if (inputType === 'min') {
            updateValue([newValue, value ? value[1] : 0]);
        } else if (inputType === 'max') {
            updateValue([value ? value[0] : 0, newValue]);
        }
    }

    return (
        <div className="price-range-overlay">
            <h4>Filtrar por Preço</h4>
            <input className='price-range-input' placeholder='Preço Minimo' type='text' name='min' onChange={(e) => handlePriceFilter(e)}></input>
            <input className='price-range-input' placeholder='Preço Maximo' type='text' name='max' onChange={(e) => handlePriceFilter(e)}></input>
        </div>
    )
}