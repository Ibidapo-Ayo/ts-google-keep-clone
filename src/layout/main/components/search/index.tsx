import { useContext, useEffect, useState } from "react";
import { GoogleKeepCloneContext } from "../../../../context/GoogleKeepCloneContext";
import { AddNoteProps } from "../../../../props/AddTasksProps";
import ShowAllTasksContainer from "../../../../components/ui/ShowAllTasksContainer";

const SearchPageContainer = () => {
  const { search, isSearch, showTasks, setShowTasks } = useContext(GoogleKeepCloneContext)
  const [searchPrompt] = search
  const [isSearching] = isSearch

  const [searchResult, setSearchResult] = useState<AddNoteProps[]>([])

  const updateTask = (id: number, isPinned: boolean) => {
    const updatedTasks = showTasks.map((item) => {
      if (item.id === id) {
        if (isPinned) {
          return { ...item, pinned: false }
        } else {
          return { ...item, pinned: true }
        }

      }
      return item
    })
    setShowTasks(updatedTasks)
  }

  useEffect(() => {
    if (searchPrompt.trim()) {
      const result = showTasks.filter((task) => {
        return task.title.toLowerCase().includes(searchPrompt.toLowerCase()) ||
          task.note.toLowerCase().includes(searchPrompt.toLowerCase()) || task.listValue.some((item) => item.text.toLowerCase().includes(searchPrompt.toLowerCase()))
      })
      setSearchResult(result)
    }
  }, [searchPrompt])

  return <div className="ml-5">
    {isSearching ? (
      searchResult.length === 0 ? (
        <p className="text-secondary-text text-md my-5">No search result with that prompt...</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
          {searchResult.map((result, index) => {
            return (

              <ShowAllTasksContainer task={result} index={index} key={index} updateTask={updateTask} />
            )
          })}
        </div>
      )
    ) : (
      <p className="text-secondary-text text-md my-5">Your search result will appear here...</p>
    )}
  </div>;
};

export default SearchPageContainer;
