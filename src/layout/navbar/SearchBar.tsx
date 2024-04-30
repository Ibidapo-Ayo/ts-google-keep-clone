import { FiArrowLeft, FiSearch, FiX } from "react-icons/fi"
import { useState } from "react"
import { useBodyClick } from "../../hooks/useBodyClick"
import Button from "../../components/Button"

const SearchBar = () => {
  const [bg, setBg] = useState<boolean>(false)
  const [mobileSearch, setMobileSearch] = useState<boolean>(false)

  useBodyClick(setBg, "search-box")
  return (
    <div className="flex flex-grow w-1/2">
      <div className="w-full flex-col cursor-pointer hidden md:flex" id="search-box">
        <div className={`w-4/5 flex items-center space-x-4 px-4 py-1 rounded-md ${`transition-color ${!bg ? " bg-gray-100" : "bg-white border border-gray-300 shadow-lg"}`}`}>
          <div>
            <Button variant="ghost" size="icon2">
              <FiSearch className="text-xl" />
            </Button>
          </div>
          <div className="w-full" onClick={() => setBg(true)}>
            <input type="text" className="w-full bg-transparent py-2 focus:border-none focus:outline-none" placeholder="Search" />
          </div>
          {bg && (
            <div>
             <Button variant="ghost" size="icon2" onClick={()=> setBg(false)}>
             <FiX className="text-xl" />
             </Button>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden block">
        {!mobileSearch && (
          <Button variant="darker" size="icon1">
            <FiSearch onClick={() => setMobileSearch(true)} />
          </Button>
        )}

        {mobileSearch && (
          <div className="absolute items-center bg-white flex w-[220px] left-2 top-1 px-2 rounded-md shadow-md space-x-2 ">
            <div>
              <Button variant="ghost" size="icon2">
                <FiArrowLeft className="text-xl" onClick={() => setMobileSearch(false)} />
              </Button>
            </div>
            <input type="text" className="w-full bg-transparent py-2 focus:border-none focus:outline-none" placeholder="Search" />
            <div>
              <Button variant="ghost" size="icon2">

                <FiX className="text-xl" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default SearchBar