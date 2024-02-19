import Logo from '@public/images/logos/logo-texto.png'
import './NavBar.css'
import { IconButton } from '@components/shared/buttons/IconButton/IconButton'
import adminSvg from '@assets/images/icons/admin.svg'
import { SearchBar } from '@components/shared/inputs/SearchBar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleAdminSettings = () => {
    console.log('abrir settings')
  }

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      console.log(searchQuery)
    }
  }, [searchQuery])

  return (
    <div className='navbar'>
        <div className='nav-list'>
            <img className='nav-logo' src={Logo} alt="Logo"/>
            <ul className='nav-links'>
                <li className='nav-link'><Link to={'/'}>Inicio</Link></li>
                <li className='nav-link'><Link to={'/'}>Recomiendame</Link></li>
            </ul>
        </div>
        <div className='nav-actions'>
            <SearchBar placeholder={'Títulos, personas, géneros'} onSearch={handleSearch} />
            <IconButton icon={{ image: adminSvg, alt: 'Herramientas de administrador' }} handleClick={handleAdminSettings} />
        </div>
    </div>
  )
}
