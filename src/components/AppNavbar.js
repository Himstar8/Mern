import React, { Component } from 'react';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand, 
    Nav, 
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    // constructor(props){
    //     supper(props)

    //     this.toggle = this.toggle.bind(this)    // ou utiliser une arrow fonction:  toggle = () => {...}
    // }

state = {
    isOpen: false
}


toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}


    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                   <Container>
                      <NavbarBrand href="/" >ShoppingList </NavbarBrand>
                      <NavbarToggler onClick={this.toggle} />
                      <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="http://google.fr">Google</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="http://google.fr">Facebook</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink active href="http://google.fr">Twitter</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="ouf" href="http://google.fr">Instagram</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="http://google.fr">Pinterest</NavLink>
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;
