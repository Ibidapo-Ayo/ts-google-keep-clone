import { useContext } from "react";
import AddTask from "./AddTask"
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext";
import SearchPageContainer from "./components/search/index"
import ShowTasksContainer from "@/components/ShowTasksContainer";

const Layout = () => {
  const { open } = useContext(GoogleKeepCloneContext);
  const [openPage] = open;
  return (
    <div className='w-full'>
      {openPage === 'addPage' && (
        <>
          <div className='max-w-2xl mx-auto shrink-0'>
            <AddTask />
          </div>
          <div className='w-full'>
            <ShowTasksContainer />
          </div>
        </>
      )}

      {openPage === "searchPage" && (
        <SearchPageContainer />
      )}
    </div>
  )
}

export default Layout