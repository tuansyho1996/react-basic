import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WarradComponent) => {
    const colorRandom = getRandomColor();
    return (props) => (
        <div className="color" style={{ color: colorRandom }}>
            <WarradComponent {...props} />
        </div>
    )
}
export default Color;