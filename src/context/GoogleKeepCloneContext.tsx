import { createContext, useState } from "react";
import { AddNoteProps, contextProps } from "../props/AddTasksProps";

type GoogleKeepCloneContextProps = {
    children: React.ReactNode
}



export const GoogleKeepCloneContext = createContext<contextProps>(contextProps)

export default function GoogleKeepProvider({ children }: GoogleKeepCloneContextProps) {
    const [tasks, setTasks] = useState<AddNoteProps>({
        id: 0,
        title: "",
        note: "",
        pinned: false,
        collaborator: [],
        image: "",
        selected: false,
        archive: false,
        isAList: false,
        listValue: []
    })

    const [showTasks, setShowTasks] = useState<AddNoteProps[]>(JSON.parse(localStorage.getItem("tasks")))

    const [expanded, setExpanded] = useState(true)
    const [addList, setAddLists] = useState(false)
    const [openActions, setOpenActions] = useState("")

    const [showEditor, setShowEditor] = useState<boolean>(false)
    const [selectedTasks, setSelectedTasks] = useState<number[]>([])
    const [openPage, setOpenPage] = useState("addPage")

    const [searchPrompt, setSearchPrompt] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    return <GoogleKeepCloneContext.Provider value={
        {
            tasks, setTasks, showTasks, setShowTasks, expanded, setExpanded,
            lists: [addList, setAddLists],
            openAction: [openActions, setOpenActions],
            editorHandler: [showEditor, setShowEditor],
            selectedTask: [selectedTasks, setSelectedTasks],
            open: [openPage, setOpenPage],
            search: [searchPrompt, setSearchPrompt],
            isSearch: [isSearching, setIsSearching]
        }
    }>{children}</GoogleKeepCloneContext.Provider>
}
