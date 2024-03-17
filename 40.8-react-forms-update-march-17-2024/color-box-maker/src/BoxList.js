import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/**
 * Component for the list of boxes.

 * @returns {JSX.Element} - JSX element for the list of boxes; renders a list of Box components.
 */
// BoxList component imports React library and keeps track of the list of boxes and render a list of Box components
function BoxList() {
    // useState hook to keep track of the list of boxes and create a state variable called boxes (an array)
    const [boxes, setBoxes] = useState([]);
    // Add a new box to the list of boxes by adding newBox to the end of the boxes array
    const addBox = (newBox) => {
        setBoxes((boxes) => [...boxes, newBox]);
    };
    // Remove a box from the list of boxes
    const removeBox = (id) => {
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    };
    // boxComponents is an array of Box components generated by mapping over the boxes array
    const boxComponents = boxes.map((box) => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
        />
    ));
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    );

}
// Export the BoxList component
export default BoxList;