import Actions from "./Actions"
import KeepBrand from "./Brand"
import SearchBar from "./SearchBar"

const NavBarContainer = () => {
  return (
    <div className="flex gap-5 lg:gap-20 justify-between pt-2 mb-6 mx-4 items-center">
      <div className="w-40">
        <KeepBrand />
      </div>
      <SearchBar />
      <Actions />
    </div>
  )
}

export default NavBarContainer