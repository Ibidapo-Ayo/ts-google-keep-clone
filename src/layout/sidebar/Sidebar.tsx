import { useContext, useState } from 'react'
import { BiArchiveIn } from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiBell, FiEdit2, FiHexagon, FiTrash2 } from 'react-icons/fi'
import { GoogleKeepCloneContext } from '../../context/GoogleKeepCloneContext'

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0)
    const { expanded, setExpanded } = useContext(GoogleKeepCloneContext)
    const sideBarItems = [
        {
            text: "Notes",
            icon: <FaRegLightbulb className={`${!expanded && "ml-1 "} text-xl`}/>
        },
        {
            text: "Reminder",
            icon: <FiBell className={`${!expanded && "ml-1 "} text-xl`}/>
        },
        {
            text: "Label",
            icon: <FiHexagon className={`${!expanded && "ml-1 "} text-xl`}/>
        },
        {
            text: "Edit",
            icon: <FiEdit2 className={`${!expanded && "ml-1 "} text-xl`}/>
        },
        {
            text: "Archive",
            icon: <BiArchiveIn className={`${!expanded && "ml-1 "} text-xl`}/>
        },
        {
            text: "Bin",
            icon: <FiTrash2 className={`${!expanded && "ml-1 "} text-xl`}/>
        }
    ]

    const handleActive = (id: number) => {
        setActiveTab(id)
    }
    return (
        <aside className=''>
            <nav className={`h-full flex flex-col bg-white`}>
                <ul className='flex-1  py-3 space-y-5'>
                    {sideBarItems.map((items, index) => {
                        const { text, icon } = items
                        return (
                            <li onMouseEnter={()=>{
                                setExpanded(true)
                            }} 
                            key={index} className={`relative space-x-7 flex items-center  py-4 px-3 my-1 font-medium cursor-pointer transition-colors  ${activeTab === index ? "bg-amber-100 hover:bg-amber-100" : "hover:bg-gray-100"} ${expanded ? "rounded-r-full": "w-14 h-14 rounded-full text-center ml-2"} `} onClick={() => handleActive(index)}>
                                <div className={``}>
                                    {icon}
                                </div>
                                <span className={`font-medium tracking-wide text-sm overflow-hidden transition-all ${expanded ? "w-60" : "w-0 "}`}>{text}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </aside>
    )
}

export default Sidebar