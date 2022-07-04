import { MenuBar } from "./MenuBar";
import { TaskSelection } from "./TaskSelection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Calendar } from "./Calendar";
import { Roster } from "./Roster";
import { Trades } from "./Trades";

function App() {
	return (
		<div className="App">
			<Router>
				<MenuBar />
				<TaskSelection />
				<Routes>
					<Route path="/" element={<Calendar />}></Route>
					<Route path="/calander" element={<Calendar />} />
					<Route path="/roster" element={<Roster />} />
					<Route path="/trades" element={<Trades />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
