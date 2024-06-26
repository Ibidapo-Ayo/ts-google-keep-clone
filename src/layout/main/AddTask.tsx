/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext";
// import { useBodyClick } from "../../hooks/useBodyClick";
import Button from "../../components/Button";
import { BrushIcon, Image, PinIcon, Redo2, SquareCheck, Undo2, } from "lucide-react";
import IconButtons from "../../components/ui/IconButtons";
import AddListKeep from "./components/AddListKeep";
import Input from "../../components/Input";
import AddCollaborator from "./components/collaborator/AddCollaborator";


const AddTask = () => {
  const { tasks, setTasks, setShowTasks, lists, showTasks, editorHandler, openAction } = useContext(GoogleKeepCloneContext)
  const [addList, setAddLists] = lists

  const [openActions] = openAction


  const [showEditor, setShowEditor] = editorHandler

  const [task, setTask] = [tasks, setTasks]

  // useBodyClick(setShowEditor, "add-task")

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: e.target.value })
  }

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask({ ...task, note: e.target.value })
  }
  const [isActiveList, setIsActiveList] = useState<number | undefined>()

  const [listTasks, setListTask] = useState([{
    text: "",
    completed: false
  }])


  useEffect(() => {
    if (!showEditor && task.title || task.collaborator.length >= 1) {
      setShowTasks((prev) => [...prev, task])
      setTask({
        id: showTasks.length + 1,
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
    }
  }, [showEditor])

  useEffect(() => {
    if (showTasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(showTasks))
    }
  }, [showTasks])


  const showEditorHandler = () => {
    setShowEditor(true)
    setAddLists(true)
  }

  const handleShowList = () => {
    const list = listTasks.filter((li) => li.text !== "")
    setTask({ ...task, listValue: list })
  }

  return (
    <div className="w-full flex flex-col my-10 space-y-3 shrink-0" id="add-task">
      {openActions === "" ? (
        <div className="w-full shadow-secondary-border shadow-md rounded-md h-auto relative">
          <div className="flex flex-row justify-between">
            {showEditor && !addList ? (
              <div className="flex flex-col w-full">
                <div className="w-full space-y-4 px-4" >
                  <div className="w-full grid grid-cols-[1fr,50px] gap-4">
                    <div>
                      <input className="border-none placeholder:text-black placeholder:tracking-tight placeholder:text-[16px] resize-none outline-none w-full placeholder:font-normal text-[16px]" placeholder="Title" value={task.title} name="title" onChange={(e) => handleTitleChange(e)} />
                    </div>
                    <Button variant="ghost" size="icon2" className={`${task.pinned && "bg-gray-200"}`} onClick={() => setTask({ ...task, pinned: !task.pinned })}><PinIcon className="w-5" /> </Button>
                  </div>
                  <div className="w-full">
                    <textarea className="border-none overflow-hidden placeholder:text-black placeholder:tracking-tighter placeholder:text-[16px] resize-none outline-none w-full placeholder:font-normal text-[16px]" placeholder="Take a note..." value={task.note} onChange={(e) => handleNoteChange(e)} />
                  </div>
                </div>
                <BottomActions setShowEditor={setShowEditor} setAddLists={setAddLists} handleShowList={handleShowList} setListTask={setListTask} collaborator={task.collaborator} />
              </div>
            ) : (
              addList ? (
                <div className="flex flex-col w-full">
                  <div className="px-4">
                    <Input variant={"ghost"} className="border-none placeholder:text-black placeholder:tracking-tighter placeholder:text-[16px] resize-none outline-none w-full placeholder:font-normal text-[16px]" placeholder="Title" value={task.title} name="title" onChange={(e) => handleTitleChange(e)} />
                  </div>

                  {listTasks.map((list, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <AddListKeep listValue={list.text} name={`${"List"}-${index}`}
                          index={index} setListValue={setListTask} items={listTasks} setIsActiveList={setIsActiveList} isActiveList={isActiveList} />
                      </div>
                    )
                  })}
                  <BottomActions setShowEditor={setShowEditor} setAddLists={setAddLists} handleShowList={handleShowList} setListTask={setListTask} collaborator={task.collaborator} />
                </div>
              ) : (
                <div className="w-full grid grid-cols-[1fr,auto] gap-4 items-center px-4">
                  <input className="focus:border-none focus:outline-none py-2 border-none placeholder:text-black placeholder:tracking-tighter placeholder:text-[16px] resize-none outline-none w-full placeholder:font-normal text-[16px]" placeholder="Take a note..." onClick={showEditorHandler} onFocus={() => setShowEditor(true)} />

                  <div className="flex items-center gap-4">
                    <Button variant="darker" size="icon2" onClick={() => {
                      setTask({ ...task, isAList: true })
                      showEditorHandler()
                    }} >
                      <SquareCheck className="" />
                    </Button>
                    <Button variant="darker" size="icon2">
                      <BrushIcon />
                    </Button>
                    <Button variant="darker" size="icon2">
                      <Image />
                    </Button>
                  </div>
                </div>

              )
            )}
          </div>
        </div>
      ) : (
        <AddCollaborator />
      )}

    </div>
  )
}
export default AddTask


export const BottomActions = ({ setShowEditor, setAddLists, handleShowList, setListTask, collaborator }: any) => {
  return (
    <>
      <div className="flex space-x-3 px-4">
        {collaborator.map((col: any) => {
          return (
            <div className="h-6 w-6 rounded-full" key={col.email}>
              <img src="/images/profile/ibidapo-ayomide.jpg" className='w-full h-full rounded-full' />
            </div>
          )
        })}

      </div>
      <div className="w-full flex justify-between items-center pb-2">
        <div className="flex space-x-3 items-center">
          <IconButtons />
          <Button variant="ghost" size="icon3" disabled={true} className="disabled:opacity-50 disabled:cursor-not-allowed">
            <Undo2 className="w-4" />
          </Button>
          <Button variant="ghost" size="icon3" disabled={true} className="disabled:opacity-50 disabled:cursor-not-allowed">
            <Redo2 className="w-4" />
          </Button>
        </div>
        <div>
          <Button className="px-5 py-2" variant="ghost" onClick={() => {
            setShowEditor((prev: boolean) => !prev)
            setAddLists(false)
            handleShowList()
            setListTask([{
              id: 0,
              text: "",
              completed: false
            }])
          }}>
            <p className="font-medium tracking-wide text-lg">Close</p>
          </Button>
        </div>
      </div>
    </>
  )
}