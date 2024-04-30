
import './App.css'
import AddTask from './layout/main/AddTask'
import ShowTasksContainer from './components/ShowTasksContainer'
import Sidebar from './layout/sidebar/Sidebar'
import NavBarContainer from './layout/navbar'
import GoogleKeepProvider from './context/GoogleKeepCloneContext'
function App() {

  return (
    <GoogleKeepProvider>
      <NavBarContainer />
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 gap-10'>
        <Sidebar />
       <div>
       <div className='max-w-3xl mx-auto'>
          <AddTask />
        </div>
        <div className='w-full'>
          <ShowTasksContainer />
        </div>
       </div>
      </div>
    </GoogleKeepProvider>
  )
}

export default App
