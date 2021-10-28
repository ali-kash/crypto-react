import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Menu, Typography, Avatar } from 'antd'
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons'

import icon from '../assets/avatar-1.png'

const Navbar = () => {
	return (
		<div className='nav'>
			<div className='nav__logoContainer'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={2} className='nav__logo'>
					<Link to='/'>CryptoVerse</Link>
				</Typography.Title>
			</div>

			<Menu theme='dark'>
				<Menu.Item key='home' icon={<HomeOutlined />}>
					<Link to='/'>Home</Link>
				</Menu.Item>
				<Menu.Item key='cryptos' icon={<FundOutlined />}>
					<Link to='/cryptos'>Cryptos</Link>
				</Menu.Item>
				<Menu.Item key='exchanges' icon={<MoneyCollectOutlined />}>
					<Link to='/exchanges'>Exchanges</Link>
				</Menu.Item>
				<Menu.Item key='news' icon={<BulbOutlined />}>
					<Link to='/news'>News</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Navbar
