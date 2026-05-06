import "./PhotoSlider.css";

function PhotoSlider({ currentImage, currentTitle, onSliderClick }) {
    
    return (
        <div className="slider-box" onClick={onSliderClick}>
            <img 
                src={currentImage} 
                alt={currentTitle} 
                className="food-image" 
            />
            <h3>{currentTitle}</h3>
            <p>👆 클릭해서 다음 맛집 보기</p>
        </div>
    );
}

export default PhotoSlider;