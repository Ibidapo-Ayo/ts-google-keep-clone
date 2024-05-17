import { useContext, useEffect, useId, useState } from "react";
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext";
import { useBodyClick } from "../../hooks/useBodyClick";
import Button from "../../components/Button";
import { BrushIcon, CheckSquare2, Image, PinIcon, Redo2, Undo2, } from "lucide-react";
import IconButtons from "../../components/IconButtons";
import AddListKeep from "./components/AddListKeep";


const AddTask = () => {
  const [showEditor, setShowEditor] = useState<boolean>(false)

  const { tasks, setTasks, setShowTasks, setPinnedTasks, lists } = useContext(GoogleKeepCloneContext)
  const [addList, setAddLists] = lists

  const [task, setTask] = [tasks, setTasks]

  useBodyClick(setShowEditor, "add-task")

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: e.target.value })
  }

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask({ ...task, note: e.target.value })
  }

  const [isTyping, setIsTyping] = useState<boolean>(false)

  const [listTasks, setListTask] = useState([{
    id: useId,
    text: "",
  }])


  useEffect(() => {
    if (!showEditor && task.title) {

      if (task.pinned) {
        setPinnedTasks((prev) => [...prev, task])
      } else {
        setShowTasks((prev) => [...prev, task])
      }
      setTask({
        id: 0,
        title: "",
        note: "",
        pinned: false,
        collaborator: [""],
        image: "",
        selected: false,
        archive: false
      })
    }
  }, [showEditor])

  const showEditorHandler = () => {
    setShowEditor(true)
    setAddLists(false)
  }

  return (
    <div className="w-full flex flex-col my-10 space-y-3 shrink-0">
      <div className="w-full shadow-secondary-border shadow-md rounded-md h-auto" id="add-task">
        <div className="flex flex-row justify-between">
          {showEditor && !addList ? (
            <div className="w-full space-y-4 py-2 px-4" >
              <div className="w-full grid grid-cols-[1fr,50px] gap-4">
                <div>
                  <input className="border-none outline-none w-full text-gray-500 placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Title" value={tasks.title} name="title" onChange={(e) => handleTitleChange(e)} />
                </div>
                <div>
                  <Button variant="ghost" size="icon2" className={`${task.pinned && "bg-gray-200"}`} onClick={() => setTask({ ...task, pinned: !task.pinned })}><PinIcon className="w-5" /> </Button>
                </div>
              </div>
              <div className="w-full">
                <textarea className="border-none resize-none overflow-hidden outline-none w-full placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Take a note..." value={task.note} onChange={(e) => handleNoteChange(e)} />
              </div>
            </div>
          ) : (
            addList ? (
              listTasks.map((list, index) => {
                return (
                  <div className="w-full">
                    <div className="px-4">
                      <input className="border-none outline-none w-full text-gray-500 placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Title" value={tasks.title} name="title" onChange={(e) => handleTitleChange(e)} />
                    </div>
                    <AddListKeep setIsTyping={setIsTyping} isTyping={isTyping} listValue={list.text} name={`${list.id}-${index}`} index={index} setListValue={setListTask} />
                  </div>
                )
              })

            ) : (
              <div className="w-full grid grid-cols-[1fr,auto] gap-4 items-center px-4">
                <input className="focus:border-none focus:outline-none py-2 border-none resize-none outline-none w-full placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Take a note..." onClick={showEditorHandler} onFocus={() => setShowEditor(true)} />

                <div className="flex items-center gap-4">
                  <Button variant="darker" size="icon2" onClick={() => setAddLists(true)}>
                    <CheckSquare2 />
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


        {showEditor || addList && (

          <div className="w-full flex justify-between items-center pt-5">
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
                setShowEditor(false)
                setAddLists(false)
              }}>
                <p className="font-medium tracking-wide text-lg">Close</p>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddTask