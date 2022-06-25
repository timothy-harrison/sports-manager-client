import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";

export function Roster() {
	const [localRoster, setLocalRoster] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/get-team/bucks").then(res => {
			setLocalRoster(res.data);
		});
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table stickyHeader sx={{ minWidth: 800 }}>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{localRoster.map(player => (
						<TableRow key={player.name}>
							<TableCell component="th" scope="row">
								{player.name}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
