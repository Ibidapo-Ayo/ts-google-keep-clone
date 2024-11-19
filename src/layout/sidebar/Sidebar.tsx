import { useContext, useState } from 'react'
import { GoogleKeepCloneContext } from '../../context/GoogleKeepCloneContext'
import { sideBarItems } from '@/constants/dummyData'

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0)
    const { expanded, setExpanded } = useContext(GoogleKeepCloneContext)


    const handleActive = (id: number) => {
        setActiveTab(id)
    }
    return (
        <aside className=''>
            <nav className={`h-full flex flex-col bg-white`}>
                <ul className='flex-1  py-3 space-y-5'>
                    {sideBarItems.map((items, index) => {
                        const { text, Icon } = items
                        return (
                            <li onMouseEnter={() => {
                                setExpanded(true)
                            }}
                                key={index} className={`relative space-x-7 flex items-center  py-4 px-3 my-1 font-medium cursor-pointer transition-colors  ${activeTab === index ? "bg-amber-100 hover:bg-amber-100" : "hover:bg-gray-100"} ${expanded ? "rounded-r-full" : "w-14 h-14 rounded-full text-center ml-2"} `} onClick={() => handleActive(index)}>
                                <div className={``}>
                                    <Icon className={`${!expanded && "ml-1 "} text-xl`} />
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