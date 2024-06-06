import { createContext, useContext } from "react"

interface Duel {
    state: boolean,
    setState: (f: boolean) => void
}

export type duelType = Duel

const CreateDuel = createContext({} as Duel)
const useDuel = () => useContext(CreateDuel)

export { CreateDuel, useDuel }