import { Plus, X } from 'lucide-react'
import Input from '../../../components/Input'
import { BiCheckbox } from 'react-icons/bi'
import Button from '../../../components/Button'

type AddListProps = {
  isTyping: boolean,
  setIsTyping: (typing: boolean) => void,
  listValue: string,
  setListValue: React.Dispatch<React.SetStateAction<{
    id: () => string;
    text: string;
  }[]>>,
  name: string,
  index: number
}

function AddListKeep({ isTyping, setIsTyping, listValue, setListValue, name, index }: AddListProps) {
  return (
    <div className='pt-4'>
      <div className='border-y border-y-secondary-border grid grid-cols-[20px,1fr,20px] gap-2 items-center px-4'>
        {isTyping ? (
          <BiCheckbox className="text-2xl text-secondary-text" />
        ) : (
          <Plus className='w-4 text-secondary-text' />
        )}
        <Input style="listInput" variant="ghost" type='text' name={name} value={listValue} onChange={(e) => {
          setListValue((prev) => {
            const updated = [...prev]
            updated[index].text = e.target.value
            return updated
          })
        }} placeholder='List Item' onInput={() => setIsTyping(false)} />
        {isTyping && (
          <Button variant="ghost" size="icon3" className='p-1 w-7 h-7' onClick={() => {
            setListValue((prev) => {
              const updated = [...prev]
              updated[index].text = ""
              return updated
            })
            setIsTyping(false)
          }}>
            <X className='w-4 text-secondary-text' />
          </Button>
        )}
      </div>
    </div>

  )
}

export default AddListKeep