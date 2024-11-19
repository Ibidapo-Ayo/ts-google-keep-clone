import { useContext } from 'react'
import { GoogleKeepCloneContext } from '../../context/GoogleKeepCloneContext'
import ShowAllTasksContainer from '../../components/ShowAllTasksContainer'

const PinnedTasks = () => {
  const { setShowTasks, showTasks } = useContext(GoogleKeepCloneContext)


  const updateTask = (id: number) => {
    const updatedTasks = showTasks.map((item) => {
      if (item.id === id) {
        return { ...item, pinned: false }
      }
      return item
    })
    setShowTasks(updatedTasks)
  }
  return (
    <div>
      <h6 className="uppercase tracking-wide text-sm font-semibold text-left">Pinned</h6>
      <div className='inline'>
        {showTasks.filter((tasks) => tasks.pinned).length > 0 ? showTasks.filter((tasks) => tasks.pinned).map((pinned, index) => (
          <ShowAllTasksContainer task={pinned} index={index} key={index} updateTask={updateTask} />
        )) : (
          <p>No pinned tasks</p>
        )
        }
      </div>

    </div >
  )
}

export default PinnedTasks