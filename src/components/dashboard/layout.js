import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/BackgroundLogin'
import AppLogo from '../../assets/svg/himachal_logoo.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Menu, MenuItem, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import HomeIcon from '@mui/icons-material/Home';
import Loading from '../Loader';


const drawerWidth = 260;


const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

function Layout(props) {
    const { window } = props;
    const { children } = props;

    const router = useRouter();

    const pathName = usePathname();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };







    const drawer = (
        <div style={{}}>
            <Toolbar >

                <Image
                    src={AppLogo}
                    width={50}
                    height={30}
                    alt="Logo"
                />

                <Typography variant="h6" noWrap component="div" marginLeft={2}>
                    Parivar Register<br /> (Urban)
                </Typography>

            </Toolbar>

            {/* <Toolbar /> */}
            {/* <Divider /> */}
            <List style={{ marginTop: 20 }}>
                {['Dashboard', 'Survey', 'Registration'].map((text, index) => (
                    <ListItem key={text} disablePadding
                        sx={{ borderRight: pathName.startsWith("/" + text.toLowerCase()) ? '4px solid #074465   ' : '0px solid #FFFFFF' }}
                        className={pathName.startsWith("/" + text.toLowerCase()) ? " text-[#074465] bg-[#f2f5f9] bg-white" : "text-slate-700"}
                        // style={{ color: pathName.startsWith("/" + text.toLowerCase()) ? "text-sky-600 bg-slate-100" : "text-slate-700" }}

                        onClick={() => router.push("/" + text.toLowerCase())}
                    >
                        <ListItemButton>



                            <ListItemIcon
                                // className={pathName.startsWith("/" + text.toLowerCase()) ? "bg-[#e6f5ff] bg-white" : "text-slate-700"}
                                className={pathName.startsWith("/" + text.toLowerCase()) ? "text-[#074465]" : "text-slate-700"}


                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText sx={{
                                transition: 'color 0.3s', // Add a smooth color transition effect
                                '&:hover': {
                                    color: "#074465", // Change the text color on hover
                                },
                            }} primaryTypographyProps={{ fontSize: '14px' }} primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['About Us', 'Contact Us'].map((text, index) => (
                    <ListItem key={text} disablePadding className={pathName.startsWith("/" + text.toLowerCase()) ? " text-[#074465] bg-[#f2f5f9] bg-white" : "text-slate-700"}


                    >
                        <ListItemButton>
                            <ListItemIcon

                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>

                            <ListItemText sx={{
                                transition: 'color 0.3s', // Add a smooth color transition effect
                                '&:hover': {
                                    color: "#074465", // Change the text color on hover
                                },
                            }} primaryTypographyProps={{ fontSize: '14px' }} primary={text} />


                            {/* <ListItemText primary={text} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }}>
            <AppBar
                position="fixed"
                enableColorOnDark={false}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: "#FFF",
                    color: '#000'
                }}
            >
                <Toolbar elevation={0}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>



                    <Stack direction={'row'} spacing={2}>
                        <Button color='inherit' onClick={handleMenuClick}>
                            <AccountCircleIcon />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Stack>





                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0, }, }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderWidth: 0, },
                    }}


                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    PaperProps={{
                        style: {

                            backgroundColor: '#FFFFFF', // Set your desired background color here
                            // boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.2)',
                            overflow: 'hidden'
                        },
                    }}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderWidth: 0 },
                    }}

                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: '#f2f5f9',
                    margin: 0,
                    padding: 0,
                    borderRadius: 5

                }}
            >
                <Toolbar />

                {/* <React.Suspense fallback={<Loading />}>{children}</React.Suspense> */}


                <main className="flex-none transition-all">{children}</main>

            </Box>
        </Box >
    );
}



export default Layout;