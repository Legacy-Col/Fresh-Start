import React, { useState, MouseEvent } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
    Typography,
    AppBar,
    Toolbar,
    Box,
    Tab,
    Tabs,
    Button,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import { Home } from '@mui/icons-material';
// import MenuBar from '../MenuBar/MenuBar';

const pages = [
    'Home',
    'About',
    'Services',
    'Practices',
    'Testimonials',
    'Contact Us',
];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#b0a38c' }}>
                <Toolbar>
                    <iconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        aria-controls={anchorEl ? 'menu-list' : undefined}
                        aria-haspopup={true}
                        aria-expanded={Boolean(anchorEl)}
                        onClick={handleClick}
                        sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <GavelIcon />
                    </iconButton>
                    <Typography
                        sx={{
                            flexGrow: 1,
                            textColor: 'inherit',
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                        }}>
                        OMA's LEGAL
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="hero" offset={0}>
                            <Button color="inherit">HOME</Button>
                        </Link>
                        <Link to="about" offset={-75}>
                            <Button color="inherit">ABOUT</Button>
                        </Link>
                        <Link to="services" offset={-130}>
                            <Button color="inherit">SERVICES</Button>
                        </Link>
                        <Link to="practices" offset={-270}>
                            <Button color="inherit">PRACTICE</Button>
                        </Link>
                        <Link to="testimonial" offset={-270}>
                            <Button color="inherit">TESTIMONIALS</Button>
                        </Link>
                        <Link to="contact">
                            <Button color="inherit">CONTACT US</Button>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                        }}>
                        <IconButton size="large" edge="start" color="inherit">
                            <MenuRoundedIcon onClick={handleClick}>
                                {/* {toggleMenu ? 'Close Menu' : 'Open Menu'} */}
                            </MenuRoundedIcon>
                        </IconButton>
                        <Menu
                            id="menu-list"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}>
                            <MenuList>
                                <Link to="home" offset={0}>
                                    <MenuItem onClick={handleClose}>
                                        HOME
                                    </MenuItem>
                                </Link>
                                <Link to="about" offset={-60}>
                                    <MenuItem onClick={handleClose}>
                                        ABOUT
                                    </MenuItem>
                                </Link>
                                <Link to="services" offset={-300}>
                                    <MenuItem onClick={handleClose}>
                                        SERVICES
                                    </MenuItem>
                                </Link>
                                <Link to="practices">
                                    <MenuItem onClick={handleClose}>
                                        PRACTICES
                                    </MenuItem>
                                </Link>
                                <Link to="testimonial">
                                    <MenuItem onClick={handleClose}>
                                        TESTIMONIALS
                                    </MenuItem>
                                </Link>
                                <Link to="contact">
                                    <MenuItem onClick={handleClose}>
                                        CONTACT US
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                    <iconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <GavelIcon sx={{ display: 'none' }} />
                    </iconButton>
                    <Typography
                        sx={{
                            flexGrow: 1,
                            textColor: 'inherit',
                            display: { xs: 'flex', md: 'none' },
                        }}
                    />
                </Toolbar>
                {/* <MenuBar /> */}
            </AppBar>
        </React.Fragment>
    );
};

export default Navbar;

// {

//     <Tabs>
//         <div
//             className="links"
//             value={value}
//             onChange={(e, value) => setValue(value)}
//             sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <Link to="hero" smooth={true} offset={0}>
//                 <Tab label="HOME" />
//             </Link>
//             <Link to="about" smooth={true} offset={-75}>
//                 <Tab label="ABOUT" />
//             </Link>
//             <Link to="services" smooth={true} offset={-130}>
//                 <Tab label="SERVICES" />
//             </Link>
//             <Link to="practices" smooth={true} offset={-270}>
//                 <Tab label="PRACTICES" />
//             </Link>
//             <Link to="testimonial" smooth={true} offset={-270}>
//                 <Tab label="TESTIMONIAL" />
//             </Link>
//             <Link to="contact" smooth={true}>
//                 <Button
//                     variant="contained"
//                     sx={{
//                         background: '#000',
//                         borderRadius: '40px',
//                     }}>
//                     Contact Us
//                 </Button>
//             </Link>
//         </div>
//     </Tabs>;

/* // const [menu, setMenu] = useState(false);
    // const handleMenuClick = () => {
    //     setMenu(!menu); */

/* // };
// <nav>
        //     <p className="logo">
        //         {' '}
        //         OMA's <span>LEGAL</span>
        //     </p>
        //     <ul>
        //         <li>
        //             <Link to="home" smooth={true} offset={0}>
        //                 HOME
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="about" smooth={true} offset={-75}>
        //                 ABOUT
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="services" smooth={true} offset={-125}>
        //                 SERVICES
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="practices" smooth={true} offset={-240}>
        //                 PRACTICES
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="testimonials" smooth={true} offset={-75}>
        //                 TESTIMONIALS
        //             </Link>
        //         </li>
        //         <li>
        //             <Link
        //                 to="contact"
        //                 smooth={true}
        //                 offset={-270}
        //                 className="btn">
        //                 CONTACT US
        //             </Link>
        //         </li>
        //     </ul>
        // </nav> */
