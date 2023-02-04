import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function SubNavbar() {
  return (
    <>
    <h5 className='m-3 title'>Categorias</h5>
    <ul className='m-4 submenu'>
        <li><Link className='submenuLi' to={"/category/men's clothing"}>men's clothing</Link></li>
        <li><Link className='submenuLi'  to={"/category/jewelery"}>jewelery</Link></li>
        <li><Link className='submenuLi'  to={"/category/electronics"}>electronics</Link></li>
        <li><Link className='submenuLi'  to={"/category/women's clothing"}>women's clothing</Link></li>
    </ul>

    </>
  )
}

export default SubNavbar