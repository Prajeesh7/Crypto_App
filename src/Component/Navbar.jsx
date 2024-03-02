import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'
import icon from '../Images/icon.jpg'
 
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} />
            <Typography.Title level={2} className='logo'>
                <Link to='/' >Crypto World</Link>
            </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar