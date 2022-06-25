import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Roster } from "./Roster";
import { Calendar } from "./Calendar";
import { Trades } from "./Trades";
import { useState } from "react";

function TabPanel(props) {
	const { children, value, index, opponents, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component="span">{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export function TaskSelection(props) {
	const [value, setValue] = useState(0);

	const handleChange = (evt, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange}>
					<Tab label="Calander" />
					<Tab label="Roster" />
					<Tab label="Trades" />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Calendar />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Roster />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Trades />
			</TabPanel>
		</Box>
	);
}
