import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
	height: 60px;
	background-color: white;
	color: black;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	
`;

const Language = styled.span`
font-weight: 600;
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;



const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
				</Left>
				<Center>
					<Logo>My Shop</Logo>
				</Center>
				<Right>
					{user ? (
						<MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
					) : (
						<>
							<Link to="/register">
								<MenuItem>REGISTER</MenuItem>
							</Link>
							<Link to="/login">
								<MenuItem>SIGN IN</MenuItem>
							</Link>
						</>
					)}
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="success">
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
