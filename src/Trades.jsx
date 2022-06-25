import { Select, Button, MenuItem } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Form, Formik } from "formik";

export function Trades() {
	return (
		<Formik
			initialValues={{ assets: "players", team: "nets" }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert("Submitting");
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ values, isSubmitting, handleChange }) => (
				<Form>
					<Select value={values.assets} onChange={handleChange}>
						<MenuItem value={"players"}>Players</MenuItem>
						<MenuItem value={"picks"}>Picks</MenuItem>
					</Select>
					<Button type="submit" disabled={isSubmitting}>
						<CompareArrowsIcon />
					</Button>
				</Form>
			)}
		</Formik>
	);
}
