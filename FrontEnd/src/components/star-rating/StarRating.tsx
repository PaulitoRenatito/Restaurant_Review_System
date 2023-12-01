
import { useState } from 'react';
import './star-rating.css'

interface StarRatingProps {
    updateValue(value: any): void;
    label?: string;
    color?: string;
}
export function StarRating({ updateValue, color = 'black' , label = 'Nota:'}: StarRatingProps) {
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
        <div className="star-rating-overlay" style={{ color: color }}>
            <p className='star-rating-label' style={{ color: color }}>{label} {rating}</p>
            <div className="star-rating-container">
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
    );
}
