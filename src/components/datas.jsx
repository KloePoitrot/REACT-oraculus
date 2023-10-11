import { createContext, useContext, useState } from "react";

import horosData from "../data/horoscope.json"

const HorosContext = createContext()

export function HorosProvider({children}){
    const [horoscope, setHoroscope] = useState(horosData)
    const [currentId, setCurrentId] = useState(0)

    return (
        <HorosContext.Provider value={{ horoscope, currentId, setCurrentId }}>
            {children}
        </HorosContext.Provider>
    )
}


export function useHoroscope(){
    return useContext(HorosContext)
}