import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component{
    state = {

    }
    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Expense tracker App</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/categories">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/expenses">Expenese</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            </div>
        );
    }
}

export default AppNav;