
import Button from '../../components/Button'
import { FiGrid, FiRotateCw, FiSettings } from 'react-icons/fi'

const Actions = () => {
    return (
        <div className='w-80 flex justify-end space-x-3'>
            <div className='w-full flex items-center'>
                <Button variant="ghost" size="icon2">
                    <FiRotateCw className="text-lg" />
                </Button>
                <Button variant="ghost" className='md:flex hidden' size="icon2">
                    <FiGrid className="text-lg" />
                </Button>
                <Button variant="ghost" size="icon2">
                    <FiSettings className="text-lg" />
                </Button>
            </div>
            <div className='flex space-x-2'>
                <Button variant="ghost" size="icon2">
                    <FiGrid className="text-lg" />
                </Button>

                <div className='h-10 md:h-12 w-10 md:w-12 rounded-full cursor-pointer'>
                    <img src="/images/profile/ibidapo-ayomide.jpg" className='w-full h-full rounded-full' />
                </div>

            </div>
        </div>
    )
}

export default Actions