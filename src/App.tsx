
import './App.css'
// import AddTask from './layout/main/AddTask'
// import ShowTasksContainer from './components/ShowTasksContainer'
import Sidebar from './layout/sidebar/Sidebar'
import NavBarContainer from './layout/navbar'
import GoogleKeepProvider from './context/GoogleKeepCloneContext'
function App() {

  return (
    <GoogleKeepProvider>
      <NavBarContainer />
      <div className='flex'>
        <Sidebar />
        {/* <div className='w-full'>
      <AddTask />
      <div className='max-w-3xl ml-60'>
          <ShowTasksContainer />
      </div>
      </div> */}
      </div>
    </GoogleKeepProvider>
  )
}

export default App
