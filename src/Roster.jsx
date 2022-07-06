import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export function Roster() {
	const [localRoster, setLocalRoster] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/get-team/bucks")
			.then(res => {
				setLocalRoster(res.data);
			})
			.catch(err => console.log("error"));
	}, []);

	return (
		<TableContainer component={Paper} sx={{ p: 2 }}>
			<Table stickyHeader sx={{ minWidth: 800 }}>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography variant="h6">Name</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{localRoster.map(player => (
						<TableRow key={player.name}>
							<TableCell>{player.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
