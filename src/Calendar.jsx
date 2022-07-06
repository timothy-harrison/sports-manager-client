import {
	CardContent,
	Grid,
	Card,
	Button,
	Typography,
	CardActions,
	Stack,
	ButtonGroup,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function Calendar() {
	const [viewDate, setViewDate] = useState({
		month: 7,
		year: 2022,
	});
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get(
				`http://localhost:3000/get-events/${viewDate.year}/${viewDate.month}`
			)
			.then(res => {
				setEvents(res.data);
			});
	}, [viewDate]);

	const advanceMonth = () => {
		setViewDate({
			month: viewDate.month + 1,
			year: 2022,
		});
	};

	const devanceMonth = () => {
		if (viewDate.month === 1) {
			setViewDate({
				month: 12,
				year: viewDate.year - 1,
			});
		} else {
			setViewDate({
				month: viewDate.month - 1,
				year: viewDate.year,
			});
		}
	};

	return (
		<>
			<ButtonGroup variant="contained" sx={{ m: 2 }}>
				<Button onClick={() => devanceMonth()}>{"<"}</Button>
				<Typography sx={{ p: 2 }}>
					{dayjs(`${viewDate.year}-${viewDate.month}`).format("YYYY MMM")}
				</Typography>
				<Button onClick={() => advanceMonth()}>{">"}</Button>
			</ButtonGroup>
			<Grid container sx={{ pl: 2 }} spacing={2}>
				{events.map((event, i) => (
					<Grid item key={i}>
						<Card sx={{ minHeight: 175, maxHeight: 175 }}>
							<CardContent>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									{events[i].date}
								</Typography>
								<Typography variant="h5" component="div">
									{events[i].game === "" ? "No Game" : events[i].game}
								</Typography>

								<Typography variant="body2">
									Team Lineups
									<br />
								</Typography>
							</CardContent>
							<CardActions>
								<Stack direction={"row"} spacing={1}>
									<Button size="small" variant="outlined">
										Play Game
									</Button>
									<Button size="small" color="warning" variant="outlined">
										Sim Game
									</Button>
								</Stack>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}
