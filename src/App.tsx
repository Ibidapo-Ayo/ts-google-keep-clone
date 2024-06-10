
import './App.css'
import ShowTasksContainer from './components/ShowTasksContainer'
import Sidebar from './layout/sidebar/Sidebar'
import NavBarContainer from './layout/navbar'
import GoogleKeepProvider from './context/GoogleKeepCloneContext'
import MobileSideBar from './layout/sidebar/MobileSideBar'
import Layout from './layout/main'
import SelectTask from './layout/main/components/select-tasks/SelectTask'
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
       <div className='w-full'>
       <div className='max-w-2xl mx-auto shrink-0'>
         <Layout />
        </div>
        <div className='w-full'>
          <ShowTasksContainer />
        </div>
       </div>
      </div>
      <SelectTask />
    </GoogleKeepProvider>
  )
}

export default App
