/* eslint-disable @typescript-eslint/no-unused-vars */
import { Check, UserPlus, X } from "lucide-react"
import Input from "../../../../components/Input"
import Button from "../../../../components/Button"
import { useContext, useState } from "react"
import { GoogleKeepCloneContext } from "../../../../context/GoogleKeepCloneContext"

interface Collaborator {
    email: string;
}

const AddCollaborator = () => {
    const { openAction, tasks, setTasks, editorHandler } = useContext(GoogleKeepCloneContext)
    const [openActions, setOpenActions] = openAction

    const [_, setShowEditor] = editorHandler
    const [value, setValue] = useState({
        email: ""
    })

    const [collaborators, setCollaborators] = useState<Collaborator[]>([])

    const [addCollaborator, setAddCollaborator] = useState(false)

    const handleAddCollaborator = () => {
        if (value.email.trim() !== "") {
            setCollaborators(prev => [...prev, { email: value.email.replace(/\s/g, "").toLowerCase() }]);
            setValue({ email: "" });
        }
    }

    const handleRemoveCollaborator = (index: number) => {
        const removedCollaborator = collaborators.filter((_col, i) => i !== index)
        setCollaborators(removedCollaborator)
    }

    const handleSaveCollaborators = () => {
        setTasks({ ...tasks, collaborator: collaborators})
        setShowEditor(true)
        setOpenActions("")
    }
    return (
            <div className={` w-full shadow-secondary-border bg-white shadow-md rounded-md h-auto space-y-4 ${openActions !== "" ? "block mb-10": "hidden"}`}>
                <div className="px-4 divide-y divide-secondary-hover space-y-3">
                    <h3 className="text-lg font-medium">Collobarators</h3>
                    <div className="py-4">
                        <div className="flex flex-col space-y-4">
                            <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
                                <div className="w-10 h-10 border-2 border-white rounded-full">
                                    <img src="/images/profile/ibidapo-ayomide.jpg" className='w-full h-full rounded-full' />
                                </div>
                                <div className="flex flex-col">
                                    {/* Will get the info from the google signin api */}
                                    <h3 className="font-medium text-sm">Ibidapo ayomide <span className="font-normal italic">(Owner)</span></h3>
                                    <p className="text-secondary-text text-xs">ibidapoayomide754@gmail.com</p>
                                </div>
                            </div>
                            {collaborators.length !== 0 &&
                                collaborators.map((col, index) => {
                                    return (
                                        <div className="grid grid-cols-[auto,1fr,auto] gap-2 items-center" key={index}>
                                            <div className="w-10 h-10 border-2 border-white rounded-full">
                                                <img src="/images/profile/ibidapo-ayomide.jpg" className='w-full h-full rounded-full' />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="font-medium text-sm">{col.email}</h3>
                                            </div>
                                            <Button variant={"ghost"} size={"icon2"} className="w-8 h-8 p-0" onClick={() => handleRemoveCollaborator(index)}>
                                                <X className="w-3" />
                                            </Button>
                                        </div>
                                    )
                                })}
                            <div className="grid grid-cols-[auto,1fr,auto] gap-2 items-center">
                                <div className="flex items-center justify-center w-10 h-10 border border-secondary-border rounded-full p-2">
                                    <UserPlus className="text-secondary-text w-4" />
                                </div>
                                <Input variant={"ghost"} style={"noneBgInput"} placeholder="Person or email to share with" value={value.email} onChange={(e) => {
                                    setValue({ email: e.target.value })
                                }} onInput={() => {
                                    setAddCollaborator(true)
                                }} className="text-secondary-text text-sm placeholder:text-[13px] placeholder:text-secondary-text" />


                                {addCollaborator && (
                                    <Button variant={"ghost"} size={"icon2"} className="w-8 h-8 p-0" onClick={handleAddCollaborator}>
                                        <Check className="w-3" />
                                    </Button>
                                )}


                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid justify-end p-4 bg-secondary-hover bg-opacity-20">
                    <div className="flex space-x-8">
                        <Button className="px-5 py-2 tracking-tight text-sm font-medium" variant="ghost" onClick={() => {
                            setOpenActions("")
                            setShowEditor(true)
                        }}>
                            Cancel
                        </Button>
                        <Button className="px-5 py-2 tracking-tight text-sm font-medium" variant="ghost" onClick={handleSaveCollaborators}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
    )
}

export default AddCollaborator