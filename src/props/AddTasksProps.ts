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
  