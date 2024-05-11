import Sidebar from "./Sidebar"

type SideBar = {
  isOpen: boolean
}

const MobileSideBar = ({ isOpen }: SideBar) => {
  return (
    <div className={`absolute left-0 z-[200] overflow-y-auto transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <Sidebar />
    </div>
  )
}

export default MobileSideBar