
import ShowTasks from '../layout/main/ShowTasks'
import PinnedTasks from './PinnedTasks'

const ShowTasksContainer = () => {
  return (
    <div className='flex flex-col space-y-5 justify-start'>
        <PinnedTasks />
        <ShowTasks />
    </div>
  )
}

export default ShowTasksContainer