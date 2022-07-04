import { Tabs, Tab, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function TaskSelection(props) {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Tabs
			value={location.pathname === "/" ? "/calander" : location.pathname}
			onChange={e => setValue(e.target.value)}
			component={Paper}
		>
			<Tab
				value="/calander"
				label="Calander"
				onClick={() => navigate("/calander")}
			/>
			<Tab value="/roster" label="Roster" onClick={() => navigate("/roster")} />
			<Tab value="/trades" label="Trades" onClick={() => navigate("/trades")} />
		</Tabs>
	);
}
