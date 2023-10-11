import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Basket from './Basket';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { destroyToken } from './tokenSlice';
import { useEffect, useState } from 'react';

export function Header() {
	const stateToken = useSelector(state => state.token.token)
	const dispatch = useDispatch();
	var [status, setStatus] = useState(null);


	const handleLogoutButtonClicked = () =>{
		dispatch(destroyToken())
		localStorage.removeItem('token')
	}

	useEffect(() => {
		const token = stateToken? stateToken : localStorage.getItem('token')

		const loginStatus = token === null ? (
			<>
				<Basket />

				<Link to="/login">
					<Button color="inherit" variant='outlined'>Login</Button>
				</Link>
				&nbsp;
				<Link to="/register">
					<Button color="inherit" variant='contained'>Register</Button>
				</Link>
			</>
		)
		:(
			<Link to="/login">
				<Button 
					color="secondary" 
					variant='contained'
					onClick={handleLogoutButtonClicked}
				>
					Logout
				</Button>
			</Link>	
		);
		
		setStatus(loginStatus)
		
		if(token === null){
			localStorage.removeItem('token')
		}
	}, [stateToken]);
	
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">
							Home
						</Link>
					</Typography>
					{status}
				</Toolbar>
			</AppBar>
		</Box>
	);
}