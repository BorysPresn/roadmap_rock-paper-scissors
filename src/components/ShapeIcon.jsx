import { useEffect, useRef } from 'react';
import { ROCK_SVG, PAPER_SVG, SCISSORS_SVG } from '../assets/svgShapes';

const ShapeIcon = ({ shapeType = null, isAnimated }) => {
    const svgRef = useRef(null);
    const figures = {
        rock : ROCK_SVG,
        paper : PAPER_SVG,
        scissors : SCISSORS_SVG
    }
    const figure = figures[shapeType] || figures.rock;

    useEffect(() => {
        if (svgRef.current) {
            isAnimated
                ? svgRef.current.classList.add('animated')
                : svgRef.current.classList.remove('animated');
        }
    }, [isAnimated]);

    return <div ref={svgRef}>{ figure }</div>
};

export default ShapeIcon;
