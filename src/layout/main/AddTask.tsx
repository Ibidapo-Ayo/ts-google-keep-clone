import { useContext, useEffect, useState } from "react";
import HoverStyle from "../../utils/HoverStyle";
import { IconsStyles1, IconsStyles3 } from "../../utils/Icons";
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext";
import IconGroup from "../../components/IconGroup";
import { useBodyClick } from "../../hooks/useBodyClick";


const AddTask = () => {
  const [showEditor, setShowEditor] = useState<boolean>(false)

  const { tasks, setTasks, setShowTasks } = useContext(GoogleKeepCloneContext)

  const [task, setTask] = [tasks, setTasks]

  useBodyClick(setShowEditor, "add-task")

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: e.target.value })
  }

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask({ ...task, note: e.target.value })
  }


  useEffect(() => {
    if (!showEditor && task.title) {
      setShowTasks((prev) => [...prev, task])
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
  }

  return (
    <div className="w-full justify-center items-center my-[120px] flex flex-col space-y-3 h-12 px-3">
      <div className="w-full md:w-[45%] shadow-gray-300 shadow-md rounded-md h-auto px-4 flex flex-row justify-between" id="add-task" onClick={showEditorHandler}>
        <div className="space-y-5 w-full">
          {showEditor && (
            <div className="w-full flex flex-row">
              <div className="w-full">
                <input className="border-none outline-none w-full text-gray-500 placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Title" value={tasks.title} name="title" onChange={(e) => handleTitleChange(e)} />
              </div>
              <div>
                <HoverStyle height="h-12" width="w-12" focussed={task.pinned ? true : false}>
                  <button onClick={() => setTask({ ...task, pinned: !task.pinned })}>{IconsStyles3.icon}</button>
                </HoverStyle>
              </div>
            </div>
          )}
          <div className="w-full  flex flex-row justify-between items-center">
            <div className={` ${showEditor ? "w-full" : "w-[45%]"}`}>
              {!showEditor && (
                <input className="focus:border-none focus:outline-none py-2  border-none resize-none outline-none w-full placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Take a note..." onFocus={()=> setShowEditor(true)} />
              )}
            {showEditor && (
                <textarea className="border-none resize-none outline-none w-full placeholder:text-gray-500 placeholder:font-normal text-xl" placeholder="Take a note..." value={task.note} onChange={(e) => handleNoteChange(e)} />
            )}
              {showEditor && (
                <div className="w-full flex flex-row space-x-1 mb-2 transition">
                  <IconGroup />
                </div>
              )}
            </div>
            {!showEditor && (
              <div className={`flex flex-row ${showEditor ? "w-0" : "w-[30%]"}`}>
                <>
                  {IconsStyles1.map((icon, index) => (
                    <div key={index}>
                      <HoverStyle height="h-12" width="w-12">
                        {icon.icon}
                      </HoverStyle>
                    </div>
                  ))}
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTask