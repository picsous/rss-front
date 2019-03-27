import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Home from "../pages/Home";
import About from "../pages/About";
import {Link, Route} from "react-router-dom";
import Admin from "../pages/Admin";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

//function ClippedDrawer(props) {
//TODO delete render() if function
class Layout extends React.Component {

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/about">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/admin">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Admin" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            RSS - FRONT
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/admin" component={Admin} />
                    {/*<Typography paragraph>*/}
                        {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
                        {/*incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent*/}
                        {/*elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in*/}
                        {/*hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum*/}
                        {/*velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.*/}
                        {/*Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis*/}
                        {/*viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.*/}
                        {/*Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus*/}
                        {/*at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed*/}
                        {/*ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                        {/*Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla*/}
                        {/*facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac*/}
                        {/*tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat*/}
                        {/*consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus*/}
                        {/*sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.*/}
                        {/*In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem*/}
                        {/*et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique*/}
                        {/*sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo*/}
                        {/*viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam*/}
                        {/*ultrices sagittis orci a.*/}
                    {/*</Typography>*/}
                </main>
            </div>
        );
    }

}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);