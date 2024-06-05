export type AddNoteProps = {
    id: number,
    title: string,
    note: string
    pinned: boolean,
    image: string,
    archive: boolean,
    selected: boolean,
    collaborator: string[],
    isAList: boolean,
    listValue: {
      id:  number,
      text: string
    }[]
}

export type AddListProps = {
    isTyping: boolean,
    setIsTyping: (typing: boolean) => void,
    listValue: string,
    setListValue: React.Dispatch<React.SetStateAction<{
      id: number;
      text: string;
    }[]>>,
    name: string,
    index: number,
    items: {
      id: number,
      text: string
    }[],
    setIsActiveList: React.Dispatch<React.SetStateAction<number | undefined>>,
    isActiveList: number | undefined,
    id:number
  }
  