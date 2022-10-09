import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.scss'

const TopDirections = () => {
    const directions = [
        {name:'GAMEK',url: 'https://gamek.vn/'},
        {name:'KENH14',url: 'https://kenh14.vn/'},
        {name:'CAFEBIZ',url: 'https://cafebiz.vn/'},
    ]
    const router = useHistory()
  return (
    <div className='d-flex TopD_container'>{directions.map(item=> <a key={item.name} href={item.url} className='mx-2' to={item.url}>{item.name}</a>)}</div>
  )
}

export default TopDirections