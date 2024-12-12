/* eslint-disable @typescript-eslint/no-explicit-any */
import { Google, Height, Inbox, Mail } from "@mui/icons-material";
import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

const drawerWidth = 202;
export const JournalLayout = ({ children }: { children: any }) => {
    return (
        <>
            <div className="d-flex">
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">Aplicación</Typography>
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" sx={{ width: drawerWidth }}>
                    <Toolbar>
                    </Toolbar>
                    <div className="overflow-auto">
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
                                return (
                                    <ListItem key={index}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <Google /> : <Inbox />}
                                            </ListItemIcon>
                                            <ListItemText primary={text}></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <Inbox /> : <Mail />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>

                <div className="m-auto d-flex flex-column" style={{ flexGrow: 1, minHeight: "100vh" }}>
                    <Toolbar />
                    {children}
                </div>
            </div>
        </>
    )
}