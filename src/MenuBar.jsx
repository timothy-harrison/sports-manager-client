import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {
	CssBaseline,
	Drawer,
	ListItem,
	ListItemButton,
	List,
} from "@mui/material";
import { useState } from "react";

export function MenuBar() {
	const [drawer, setDrawer] = useState(false);

	return (
		<>
			<CssBaseline />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={() => setDrawer(true)}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
				<Box
					role="presentation"
					sx={{ width: 250 }}
					onClick={() => setDrawer(false)}
					onKeyDown={() => setDrawer(false)}
				>
					<List>
						{["Open New File", "Save"].map(text => {
							return (
								<ListItem disablePadding>
									<ListItemButton>{text}</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Box>
			</Drawer>
		</>
	);
}
