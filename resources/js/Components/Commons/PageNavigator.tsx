import { useState, useLayoutEffect } from 'react';
import { navigatorItems } from './navigatorItems';
import { ListSubheader } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { router } from '@inertiajs/react';

export default function PageNavigator() {
    const [open, setOpen] = useState<boolean>(false);
    const [nestedOpen, setNestedOpen] = useState<{ [key: string]: boolean }>({});
    const [home, setHome] = useState<string>('Home');

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleNestedClick = (itemId: string) => {
        setNestedOpen(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    useLayoutEffect(() => {
        const pageData = document.getElementById('app')?.dataset.page || '{}'
        const pageObject = JSON.parse(pageData)
        setHome((prev) => { return pageObject.props.translations.words.Home })
        return () => { }
    }, [])

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListSubheader>
                    {home || 'Home'}
                </ListSubheader>
                {navigatorItems.map((item) => (
                    <div key={item.id}>
                        <Divider />
                        <ListItemButton onClick={() => handleNestedClick(item.id)}>
                            <ListItemText primary={item.text} />
                            {nestedOpen[item.id] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={nestedOpen[item.id]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {item.children.map((child) => (
                                    <ListItemButton
                                        key={child.text}
                                        sx={{ pl: 4 }}
                                        onClick={() => (
                                            router.visit(
                                                child.path,
                                                { method: 'get' }
                                            ))
                                        }
                                    >
                                        <ListItemText primary={child.text} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="absolute top-[5%] left-0">
            <Button sx={{ padding: 0 }} onClick={toggleDrawer(true)}><DehazeIcon /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
