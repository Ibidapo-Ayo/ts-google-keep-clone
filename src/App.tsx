
import './App.css'
import Sidebar from './layout/sidebar/Sidebar'
import NavBarContainer from './layout/navbar'
import GoogleKeepProvider from './context/GoogleKeepCloneContext'
import MobileSideBar from './layout/sidebar/MobileSideBar'
import SelectTask from './layout/main/components/select-tasks/SelectTask'
import Layout from './layout/main'
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
        <Layout />
      </div>
      <SelectTask />
    </GoogleKeepProvider>
  )
}

export default App
