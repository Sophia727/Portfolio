import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";


//css
import "./timeline.css";

function App() {
const [value, setValue] = useState(0);
const [previous, setPrevious] = useState(0);

// Values should be only date
const VALUES = ["2015-06", "2021-01-15", "2021-03-22"];

// Description array corresponding to values
const description = [
	"scientific baccalaureate",
	"The event of 15 Jan 2021 : Festival",
	"The event of 22 March 2021 : Board Exam",
];

return (
	<div className="root-div">
	<div style={{ width: "60%",
					height: "100px",
					margin: "0 auto" }}>
		<HorizontalTimeline
		styles={{ outline: "#DFA867", foreground: "#19295C" }}
		index={value}
		indexClick={(index) => {
			setValue(index);
			setPrevious(value);
		}}
		values={VALUES}
		/>
	</div>
	<div className="text-center">{description[value]}</div>
	</div>
);
}

export default App;
