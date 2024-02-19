import { type ButtonIcon } from '@/interfaces/buttonIcon.interface'
import './IconButton.css'
export const IconButton = ({ icon, handleClick }: ButtonIcon) => {
  return (
        <button
          className='icon-button'
          onClick={handleClick}
        >
            <img src={icon.image} alt={icon.alt} />
        </button>
  )
}
