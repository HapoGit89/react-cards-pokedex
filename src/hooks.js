import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

export function useFlip(facingUp) {
    const [isFacingUp, setIsFacingUp] = useState(facingUp);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };


    return [isFacingUp, flipCard];
}


export function useAxios(url) {
    const [cards, setCards] = useState([]);
    const addCard = async (name) => {
        const response = await axios.get(`${url}/${name}`);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };

    return [cards, addCard];
}

