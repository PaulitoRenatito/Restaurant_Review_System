import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface RestaurantContextProps {
    restaurantId: number | null;
    updateRestaurant: (newRestaurantId: number | null) => void;
}
const RestaurantContext = createContext<RestaurantContextProps | undefined>(undefined);

interface RestaurantProviderProps {
    children: ReactNode;
}
export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
    const [restaurantId, setRestaurantId] = useState<number | null>(() => {
        const storedRestaurantId = localStorage.getItem("restaurantId");
        return storedRestaurantId ? parseInt(storedRestaurantId, 10) : null;
    });

    useEffect(() => {
        localStorage.setItem("restaurantId", restaurantId?.toString() || "");
    }, [restaurantId]);

    const updateRestaurant = (newRestaurantId: number | null) => {
        setRestaurantId(newRestaurantId);
    }

    return (
        <RestaurantContext.Provider value={{ restaurantId, updateRestaurant }}>
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurant = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error('useRestaurant must be used within a RestaurantProvider');
    }
    return context;
};