import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
    getUsersRequest,
    deleteUsersRequest,
    getUserRequest,
    updateUsersRequest,
} from "../api/user";

const UserContext = createContext();
export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("El useUser debe estar dentro de AuthProvider");
    }

    return context;
};

export function UserProvider({ children }) {
    const [users, setUser] = useState([]);

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await deleteUsersRequest(id);
            if (res.status === 204) setUser(users.filter((user) => user._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getUser = async (id) => {
        try {
            const res = await getUserRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateUser = async (id, user) => {
        try {
            await updateUsersRequest(id, user)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <UserContext.Provider
            value={{
                users,
                getUsers,
                deleteUser,
                getUser,
                updateUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}