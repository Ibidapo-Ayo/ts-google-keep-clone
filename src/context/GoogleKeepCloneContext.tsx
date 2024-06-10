import { createContext, useState } from "react";
import { AddNoteProps } from "../props/AddTasksProps";

type GoogleKeepCloneContextProps = {
    children: React.ReactNode
}

type contextProps = {
    tasks: AddNoteProps,
    setTasks: React.Dispatch<React.SetStateAction<AddNoteProps>>,
    showTasks: AddNoteProps[],
    setShowTasks: React.Dispatch<React.SetStateAction<AddNoteProps[]>>
    pinnedTasks: AddNoteProps[],
    setPinnedTasks: React.Dispatch<React.SetStateAction<AddNoteProps[]>>,
    expanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    lists: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    openAction: [string, React.Dispatch<React.SetStateAction<string>>],
    editorHandler: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    selectedTask: [number[], React.Dispatch<React.SetStateAction<number[]>>]
}
const notesProps = {
    id: 0,
    title: "",
    note: "",
    pinned: false,
    collaborator: [],
    image: "",
    selected: false,
    archive: false,
    isAList: false,
    listValue: [],
}

export const GoogleKeepCloneContext = createContext<contextProps>({
    tasks: notesProps,
    setTasks: () => { },
    showTasks: [],
    setShowTasks: () => [],
    pinnedTasks: [],
    setPinnedTasks: () => [],
    expanded: true,
    setExpanded: () => true,
    lists: [false, () => false],
    openAction: ["", ()=> ""],
    editorHandler: [false, ()=> false],
    selectedTask: [[], ()=> []]
})

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

    const [showTasks, setShowTasks] = useState<AddNoteProps[]>([])
    const [pinnedTasks, setPinnedTasks] = useState<AddNoteProps[]>([])

    const [expanded, setExpanded] = useState(true)
    const [addList, setAddLists] = useState(false)
    const [openActions, setOpenActions] = useState("")

    const [showEditor, setShowEditor] = useState<boolean>(false)
    const [selectedTasks, setSelectedTasks] = useState<number[]>([])

    return <GoogleKeepCloneContext.Provider value={
        {
            tasks, setTasks, showTasks, setShowTasks, pinnedTasks, setPinnedTasks, expanded, setExpanded,
            lists: [addList, setAddLists],
            openAction: [openActions, setOpenActions],
            editorHandler: [showEditor, setShowEditor],
            selectedTask: [selectedTasks, setSelectedTasks]
        }
    }>{children}</GoogleKeepCloneContext.Provider>
}
