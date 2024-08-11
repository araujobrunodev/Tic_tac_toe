import { createContext, useContext } from "react";

interface BlockPlayers {
    queue: string[]
    setQueue: (s: string[]) => void,
    limit: boolean,
    setLimit: (t: boolean) => void
}

const CreateBlockPlayers = createContext({} as BlockPlayers)
const useBlockPlayers = () => useContext(CreateBlockPlayers)

export {CreateBlockPlayers, useBlockPlayers}