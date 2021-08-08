import { useState } from 'react';
import {BtnContainer} from './components/btnContainer'
import {Display} from "./components/display/Display";
import failsound from "./assets/"
import "./App.css"

const App = () => {
	return (
		<div>
			<h1>Prank Calculator 🤪</h1>
			<div className="mainParent">
				<div id="lastValue"></div>
				<div id="result" className="result">
					0.00
				</div>

				
			</div>
		</div>
	);
};

export default App;

const handleOnButtonClick = val => {
  if (val === "=") {
    return onTotal();

  }
if (val === "AC")
return setTextToDisplay("");
}
if (val==="C") {
console.log(typepof textToDisplay);
const str = textToDisplay.toString().slice(0, -1);

return setTextToDisplay(str);
}

if (val === "OFF") {
  return setIsOff(!isOff);
}

setTextToDisplay(textToDisplay + val);
};

const onTotal = () => {
  const total = eval(textToDisplay) + randomVal();
  setTextToDisplay(total.toString());
}