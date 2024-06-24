import { Plus, Square, X } from 'lucide-react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { AddListProps } from '../../../props/AddTasksProps'
import { useState } from 'react'


function AddListKeep({listValue, setListValue, name, index, items, isActiveList, setIsActiveList}: AddListProps) {
  const [, setIsTyping] = useState<boolean>(false)
  
  return (
    <div className='pt-4'>
      <div className={`grid grid-cols-[20px,1fr,20px] gap-2 items-center px-4 ${index === isActiveList && "border-y"}`} onClick={() => {
        setIsActiveList(index)
        setIsTyping(false)
      }}

      >


        {isActiveList === index || items[index].text !== "" ? (
          <Square className="w-5 text-secondary-text cursor-pointer" />
        ) : (
          <Plus className='w-4 text-secondary-text' />
        )}


        <Input style="listInput" variant="ghost" type='text' className='placeholder:text-black placeholder:tracking-tighter placeholder:text-[16px] placeholder:font-normal text-[16px]' name={name} value={listValue} onChange={(e) => {
          setListValue((prev) => {
            const updated = [...prev]
            updated[index].text = e.target.value
            return updated
          })
        }} placeholder='List Item' onInput={() => {
          setIsTyping(true)
          if(index === items.length -1){
            setListValue((prev) => [...prev, {
              text: "",
              completed: false
            }])
          }
        }}

          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setIsTyping(false)
              setIsActiveList(items.length -1)
            }
          }}

        />
        {isActiveList === index && (
          <Button variant="ghost" size="icon3" className='p-1 w-7 h-7' onClick={() => {
           if(items.length <= 1){
            setListValue([{
              text: "",
              completed: false
            }])
            return
           }

           if (items.length > 1) {
            const deleteItem = items.filter((_item, i) => i !== index)
            setListValue(deleteItem)
          }
          }}>
            <X className='w-4 text-secondary-text' />
          </Button>
        )}
      </div>
    </div>

  )
}

export default AddListKeep