import { useEffect, useState } from "react";
import { useValuationMutate } from "../../hooks/post/useValuationMutate";
import { ValuationData } from "../../interface/ValuationData";
import { useUser } from "../../context/UserContext";
import { useRestaurant } from "../../context/RestaurantContext";

import './create-modal-valuation.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}
const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

interface CreateModalValuationProps {
    closeModal(): void
}
export function CreateModalValuation({ closeModal }: CreateModalValuationProps) {

    const { userId } = useUser();
    const { restaurantId } = useRestaurant();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const { mutate, isSuccess } = useValuationMutate();

    const submit = () => {
        const now = new Date();
        const valuationData: ValuationData = {
            user_id: userId!,
            restaurant_id: restaurantId!,
            rating: rating,
            comment: comment,
            date: now.toISOString().split('T')[0],
            hour: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        mutate(valuationData);
    }

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova avaliação</h2>
                <form className="input-container">
                    <Input label="Nota" value={rating} updateValue={setRating}></Input>
                    <Input label="Comentario" value={comment} updateValue={setComment}></Input>
                </form>
                <div className="button-container">
                    <button onClick={closeModal} className="btn-secondary">Cancelar</button>
                    <button onClick={submit} className="btn-secondary">Postar</button>
                </div>
            </div>
        </div>
    )
}
