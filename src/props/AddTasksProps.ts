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

export type AddNoteProps = {
    id: number,
    title: string,
    note: string
    pinned: boolean,
    image: string,
    archive: boolean,
    selected: boolean,
    collaborator: {
      email:string
    }[],
    isAList: boolean,
    listValue: {
      id:  number,
      text: string;
      completed: boolean
    }[]
}

export type AddListProps = {
    listValue: string,
    setListValue: React.Dispatch<React.SetStateAction<{
      id: number;
      text: string;
      completed: boolean
    }[]>>,
    name: string,
    index: number,
    items: {
      id: number,
      text: string;
      completed: boolean
    }[],
    setIsActiveList: React.Dispatch<React.SetStateAction<number | undefined>>,
    isActiveList: number | undefined,
    id:number
  }
  