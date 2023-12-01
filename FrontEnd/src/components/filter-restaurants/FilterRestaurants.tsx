import { useEffect, useState } from "react";
import { useRestaurantByPriceRange } from "../../hooks/restaurant/useRestaurantByPriceRange";
import { useRestaurantByRating } from "../../hooks/restaurant/useRestaurantByRating"
import { StartRating } from "../star-rating/StarRating";
import { PriceRange } from "../price-range/PriceRange";

interface FilterRestaurantsProps {
    onFilterChange(options: {
        rating: number;
        range: [number, number];
    }): void;
}
export function FilterRestaurants({ onFilterChange }: FilterRestaurantsProps) {
    const [rating, setRating] = useState(0);
    const [range, setRange] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        onFilterChange({ rating, range });
    }, [rating, range, onFilterChange]);

    return (
        <div>
            <StartRating updateValue={setRating} />
            <PriceRange updateValue={setRange} />
        </div>
    );
}