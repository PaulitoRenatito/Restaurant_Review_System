
import { useState } from 'react';
import './start-rating.css'

interface StartRatingProps {
    updateValue(value: any): void
}
export function StartRating({ updateValue }: StartRatingProps) {

    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarClick = (star: number) => {
        setRating(star);
        updateValue(star);
    };

    const handleStarHover = (star: number) => {
        setHoveredRating(star);
    };

    return (
        <div className="start-rating-overlay">
            <p className='start-rating-label'>Nota: {rating} estrelas</p>
            <div className="start-rating-container">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= (hoveredRating || rating) ? 'filled' : ''}`}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={() => handleStarHover(0)}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    )
}
