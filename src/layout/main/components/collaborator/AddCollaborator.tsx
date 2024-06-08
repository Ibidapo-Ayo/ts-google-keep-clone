import { UserPlus } from "lucide-react"
import Input from "../../../../components/Input"
import Button from "../../../../components/Button"

const AddCollaborator = () => {
  return (
    <div className="w-full flex flex-col space-y-3 shrink-0 py-2">
        <div className="w-full shadow-secondary-border shadow-md rounded-md h-auto space-y-4">
        <div className="px-4 divide-y divide-secondary-hover space-y-3">
            <h3 className="text-lg font-medium">Collobarators</h3>
            <div className="py-4">
                <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
                        <div className="w-10 h-10 border-2 border-white rounded-full">
                        <img src="/images/profile/ibidapo-ayomide.jpg" className='w-full h-full rounded-full' />
                        </div>
                        <div className="flex flex-col">
                        <h3 className="font-medium text-sm">Ibidapo ayomide <span className="font-normal italic">(Owner)</span></h3>
                        <p className="text-secondary-text text-xs">ibidapoayomide754@gmail.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
                        <div className="flex items-center justify-center w-10 h-10 border border-secondary-border rounded-full p-2">
                        <UserPlus className="text-secondary-text w-4" />
                        </div>
                       <Input variant={"ghost"} style={"noneBgInput"} placeholder="Person or email to share with" className="text-secondary-text text-sm placeholder:text-[13px] placeholder:text-secondary-text" />
                    </div>
                </div>
            </div>
        </div>

        <div className="grid justify-end p-4 bg-secondary-hover bg-opacity-20">
        <div className="flex space-x-8">
            <Button  className="px-5 py-2 tracking-tight text-sm font-medium" variant="ghost">
                Cancel
            </Button>
            <Button  className="px-5 py-2 tracking-tight text-sm font-medium" variant="ghost">
                Save
            </Button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AddCollaborator