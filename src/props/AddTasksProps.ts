export type AddNoteProps = {
    id: number,
    title: string,
    note: string
    pinned: boolean,
    image: string,
    archive: boolean,
    selected: boolean,
    collaborator: {
      email: string
    }[],
    isAList: boolean,
    listValue: {
      text: string;
      completed: boolean
    }[]
}

export type AddListProps = {
    listValue: string,
    setListValue: React.Dispatch<React.SetStateAction<{
      text: string;
      completed: boolean
    }[]>>,
    name: string,
    index: number,
    items: {
      text: string;
      completed: boolean
    }[],
    setIsActiveList: React.Dispatch<React.SetStateAction<number | undefined>>,
    isActiveList: number | undefined,
  }

  export const notesProps = {
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

  export const contextProps = {
    tasks: notesProps,
    setTasks: () => { },
    showTasks: [],
    setShowTasks: () => [],
    expanded: true,
    setExpanded: () => true,
    lists: [false, () => false],
    openAction: ["", ()=> ""],
    editorHandler: [false, ()=> false],
    selectedTask: [[], ()=> []],
    open: ["", ()=> ""],
    search: ["", ()=> ""],
    isSearch: [false, () => false],
  }

  export type contextProps = {
    tasks: AddNoteProps,
    setTasks: React.Dispatch<React.SetStateAction<AddNoteProps>>,
    showTasks: AddNoteProps[],
    setShowTasks: React.Dispatch<React.SetStateAction<AddNoteProps[]>>,
    expanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    lists: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    openAction: [string, React.Dispatch<React.SetStateAction<string>>],
    editorHandler: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    selectedTask: [number[], React.Dispatch<React.SetStateAction<number[]>>],
    open: [string, React.Dispatch<React.SetStateAction<string>>],
    search: [string, React.Dispatch<React.SetStateAction<string>>],
    isSearch: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}
  