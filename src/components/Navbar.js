import React, { useContext } from 'react'
import { Link, Routes } from 'react-router-dom'
import '../assets/navbar.css'
import { MyContext } from './context/Context';

const Navbar = () => {
  const { logedin } = useContext(MyContext);
  

  return (

    <div className='container'>
      <nav className='navbarcontainer'>
        <div className='navbar'>
            <ul className='navbarul'>
                <li className='navbaritem'>Chitthi</li>
                <li className='navbaritem'>
                  { logedin ?
                    <div className='navbaractions'>
                       <Link to="/home"><button>Home</button></Link>
                       <Link to="/roomsadd"><button>Create/Join Room </button></Link>
                    </div>
                    :
                    <div className='navbaractions'>
                       <Link to="/"><button>Signup</button></Link>
                      
                    </div>}
                </li>
            </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar