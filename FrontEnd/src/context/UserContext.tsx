import { ReactNode, createContext, useContext, useState, useEffect } from "react";

interface UserContextProps {
    userId: number | null;
    updateUser: (newUserId: number | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userId, setUserId] = useState<number | null>(() => {
        const storedUserId = localStorage.getItem("userId");
        return storedUserId ? parseInt(storedUserId, 10) : null;
    });

    useEffect(() => {
        localStorage.setItem("userId", userId?.toString() || "");
    }, [userId]);

    const updateUser = (newUserId: number | null) => {
        setUserId(newUserId);
    }

    return (
        <UserContext.Provider value={{ userId, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};