import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='flex justify-center bg-gray-600'>
        <li>
          <button>
          <Link to='/' className='bg-yellow-400 text-fuchsia-600 p-4 rounded-l-full'>
            Home
          </Link>
          </button>
        </li>
        <li>
          <button>
          <Link to='/about' className='bg-yellow-400 text-fuchsia-600 p-4 rounded-b-full'>
            About
          </Link>
          </button>
        </li>
        <li>
          <button>
          <Link to='/github' className='bg-yellow-400 text-fuchsia-600 p-4 rounded-r-full'>
            Github
          </Link>
          </button>
        </li>
      </div>
    </>
  )
}

export default Header
