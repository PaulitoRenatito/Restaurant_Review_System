import './button-delete.css'

interface ButtonDeleteProps {
    onClick(): void
}
export function ButtonDelete({ onClick }: ButtonDeleteProps) {
    return (
        <>
            <i className='fa fa-trash' onClick={onClick}/>
        </>
    )
}