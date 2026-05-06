import { useState } from "react";
import "./AnimalCard.css";

function AnimalCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showResult, setShowResult] = useState(false);

    return (
        <div 
            className="animal-card"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowResult(true)}
        >
            {showResult ? (
                <div className="result-content">
                    <h3>{data.resultTitle}</h3>
                    <p>{data.resultDesc}</p>
                </div>
            ) : (
                <div className="image-content">
                    <img 
                        src={isHovered ? data.imgHover : data.imgNormal} 
                        alt={data.name} 
                    />
                    <h3 className="animal-name">{data.name}</h3>
                </div>
            )}
        </div>
    );
}

export default AnimalCard;