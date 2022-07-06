import { Button, Grid, MenuItem, Paper, Stack, Select } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import axios from "axios";
import { useState, useEffect } from "react";

export function Trades() {
	const [teamAssets, setTeamAssets] = useState([]);
	const [selectedAssets, setSelectedAssets] = useState([]);
	const [opposingTeamAssets, setOpposingTeamAssets] = useState([]);
	const [selectedOppAssets, setSelectedOppAssets] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState("nets");

	useEffect(() => {
		axios.get("http://localhost:3000/get-team/bucks").then(res => {
			setTeamAssets(res.data);
		});
		axios.get("http://localhost:3000/get-team/nets").then(res => {
			setOpposingTeamAssets(res.data);
		});
	}, []);

	const deleteSelectAsset = asset => {
		let arr = selectedAssets;
		let pos = arr.indexOf(asset);
		arr.splice(pos, 1);
		setSelectedAssets([...arr]); // spread operator tells react that the state has changed
	};
	const deleteOppSelectAsset = asset => {
		let arr = selectedOppAssets;
		let pos = arr.indexOf(asset);
		arr.splice(pos, 1);
		setSelectedOppAssets([...arr]); // spread operator tells react that the state has changed
	};
	const handleChangeTeam = e => {
		setSelectedTeam(e.target.value);
		axios.get(`http://localhost:3000/get-team/${e.target.value}`).then(res => {
			setOpposingTeamAssets(res.data);
		});
		setSelectedOppAssets([]);
	};

	return (
		<Grid
			container
			component={Paper}
			alignItems="center"
			justifyContent={"center"}
			sx={{ m: 2, p: 2 }}
		>
			<Grid item xs={3.5}>
				<Stack>
					{teamAssets.map(asset => {
						return (
							<Button
								key={asset.name}
								fullWidth
								variant="outlined"
								onClick={() => {
									setSelectedAssets([...selectedAssets, asset]);
								}}
								disabled={selectedAssets.indexOf(asset) !== -1}
							>
								{asset.name}
							</Button>
						);
					})}
				</Stack>
			</Grid>
			<Grid item xs={2}>
				<Stack>
					{selectedAssets.map(asset => {
						return (
							<Button
								color="warning"
								key={asset.name}
								variant="outlined"
								onClick={() => deleteSelectAsset(asset)}
							>
								{asset.name}
							</Button>
						);
					})}
				</Stack>
			</Grid>
			<Grid item xs={1}>
				<Button
					color="secondary"
					fullWidth
					type="submit"
					onClick={() => {
						console.log("Swap these players: ", {
							selectedAssets,
							selectedOppAssets,
						});
						setSelectedAssets([]);
						setSelectedOppAssets([]);
					}}
				>
					<CompareArrowsIcon />
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Stack>
					{selectedOppAssets.map(asset => {
						return (
							<Button
								color="warning"
								key={asset.name}
								variant="outlined"
								onClick={() => deleteOppSelectAsset(asset)}
							>
								{asset.name}
							</Button>
						);
					})}
				</Stack>
			</Grid>
			<Grid item xs={3.5}>
				<Stack>
					<Select value={selectedTeam} onChange={handleChangeTeam}>
						<MenuItem value="nets">Nets</MenuItem>
						<MenuItem value="bucks">Bucks</MenuItem>
					</Select>
					{opposingTeamAssets.map(asset => {
						return (
							<Button
								key={asset.name}
								fullWidth
								variant="outlined"
								onClick={() => {
									setSelectedOppAssets([...selectedOppAssets, asset]);
								}}
								disabled={selectedOppAssets.indexOf(asset) !== -1}
							>
								{asset.name}
							</Button>
						);
					})}
				</Stack>
			</Grid>
		</Grid>
	);
}
