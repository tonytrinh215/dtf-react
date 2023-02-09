import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import NavImg from '../app/assets/dtf-logo-150-84.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark color='#901CAD' sticky='top' expand='md'>
            <NavbarBrand href='/' className='ms-5'>
                <img src={NavImg} height='40px'/>
                {/* <h6 className='mt-1'> DT Fitness & Therapy</h6> */}
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-5' navbar>
                    <NavItem className='ms-5'>
                        <NavLink className='nav-link' to='/ourstory'>
                            Our Story
                        </NavLink>
                    </NavItem>
                    <NavItem className='ms-5'>
                        <NavLink className='nav-link' to='/bookings'>
                            Bookings
                        </NavLink>
                    </NavItem>
                    <NavItem className='ms-5'>
                        <NavLink className='nav-link' to='/testimonials'>
                            Testimonials
                        </NavLink>
                    </NavItem>
                    <NavItem className='ms-5'>
                        <NavLink className='nav-link' to='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>            
        </Navbar>
    )
}

export default Header;