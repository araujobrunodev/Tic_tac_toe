import {createContext, useContext } from "react"

interface Page {
    name: string,
    setName: (a: string) => void
    OpenBars: boolean
    setOpenBars: (l: boolean) => void
}

const CreatePage = createContext({} as Page)
const usePage = () => useContext(CreatePage)

export {CreatePage, usePage}