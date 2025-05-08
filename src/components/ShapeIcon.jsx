import React, { useEffect, useRef } from 'react';
import { ROCK_SVG, PAPER_SVG, SCISSORS_SVG } from '../assets/svgShapes';

const ShapeIcon = ({ shapeType, isAnimated }) => {
    const svgRef = useRef(null);
    let selectedShape = null;

    switch (shapeType) {
        case 'rock':
            selectedShape = ROCK_SVG;
            break;
        case 'paper':
            selectedShape = PAPER_SVG;
            break;
        case 'scissors':
            selectedShape = SCISSORS_SVG;
            break;
        default:
            break;
    }
    useEffect(() => {
        if (svgRef.current) {
            isAnimated
                ? svgRef.current.classList.add('animated')
                : svgRef.current.classList.remove('animated');
        }
    }, [isAnimated]);

    return selectedShape
        ? React.cloneElement(selectedShape, { ref: svgRef })
        : React.cloneElement((selectedShape = ROCK_SVG), { ref: svgRef });
};

export default ShapeIcon;
