
import './App.css'
import AddTask from './layout/main/AddTask'
import ShowTasksContainer from './components/ShowTasksContainer'
import Sidebar from './layout/sidebar/Sidebar'
import NavBarContainer from './layout/navbar'
import GoogleKeepProvider from './context/GoogleKeepCloneContext'
import MobileSideBar from './layout/sidebar/MobileSideBar'
function App() {

  return (
    <GoogleKeepProvider>
      <NavBarContainer />
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 gap-10'>
      <div className='w-10 md:hidden block'>
      <MobileSideBar isOpen={true} />
      </div>
      <div className='md:block hidden'>
      <Sidebar />
      </div>
       <div>
       <div className='max-w-2xl mx-auto'>
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
