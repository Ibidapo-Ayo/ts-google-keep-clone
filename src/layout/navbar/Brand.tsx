import { FiMenu } from 'react-icons/fi'
import { useContext } from 'react'
import { GoogleKeepCloneContext } from '../../context/GoogleKeepCloneContext'
import Button from '../../components/Button'

const KeepBrand = () => {
  const {setExpanded} = useContext(GoogleKeepCloneContext)
  return (
    <div className='flex flex-row space-x-3 items-center'>
        <div>
           <Button variant="ghost" size="icon2" onClick={()=> {
            setExpanded((prev)=> !prev)
           }}>
           <FiMenu className="text-2xl" />
           </Button>
        </div>
        <div className='flex items-center shrink-0'>
            <img src='/images/logo/keep_logo.png' className='w-[40px] md:w-[80px]' />
            <h4 className='text-secondary-text font-normal tracking-tight text- md:text-2xl'>Keep</h4>
        </div>
    </div>
  )
}

export default KeepBrand