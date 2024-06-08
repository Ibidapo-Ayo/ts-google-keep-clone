import { useContext } from "react"
import { GoogleKeepCloneContext } from "../../context/GoogleKeepCloneContext"
import AddTask from "./AddTask"
import AddCollaborator from "./components/collaborator/AddCollaborator"

const Layout = () => {
    const {openAction} = useContext(GoogleKeepCloneContext)
    const [openActions] = openAction

  return (
   openActions === "" ? (
    <AddTask />
   ): (
    openActions === "collaborator" && (
        <AddCollaborator />
    )
   )
  )
}

export default Layout