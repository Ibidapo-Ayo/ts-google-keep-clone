/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react"
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext"
import ShowAllTasksContainer from "../../components/ShowAllTasksContainer"


const ShowTasks = () => {

    const { showTasks, setShowTasks } = useContext(GoogleKeepCloneContext)

    const updateTask = (id: number) => {
        const updatedTasks = showTasks.map((item) => {
            if (item.id === id) {
                return { ...item, pinned: true }
            }
            return item
        })
        setShowTasks(updatedTasks)
    }
    return (
        <>
            <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Notes</h6>
            <div className="inline">
                {showTasks.filter((task) => !task.pinned).length === 0 ? (
                    <p>No added tasks</p>
                ) : (
                    showTasks.filter((tasks) => !tasks.pinned).sort((a, b) => b.id - a.id).map((task, index) => {
                        return (
                            <ShowAllTasksContainer task={task} index={index} key={index} updateTask={updateTask} />

                        )
                    })
                )}
            </div >
        </>
    )

}

export default ShowTasks