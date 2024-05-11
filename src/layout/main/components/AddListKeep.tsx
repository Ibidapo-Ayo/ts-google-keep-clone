import { Plus } from 'lucide-react'
import React from 'react'
import Input from '../../../components/Input'

function AddListKeep() {
  return (
    <div className='border-y border-y-secondary-border grid grid-cols-[20px,1fr,20px] gap-2'>
        <Plus className='w-2' />
        <Input size="listInput" variant="ghost" type='text' />
    </div>
  )
}

export default AddListKeep