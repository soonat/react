import "./BucketItem.css";

function BucketItem({ data, onDelete, onToggle }) {
    return (
        <div className={`bucket-item ${data.isDone ? "done" : ""}`}>
            
            <div className="bucket-content" onClick={() => onToggle(data.id)}>
                <span className="checkbox">
                    {data.isDone ? "🛫" : "🧳"}
                </span>
                
                <div className="text-info">
                    <span className="location-badge">
                        📍 {data.country} - {data.region}
                    </span>
                    <p className="activity-text">{data.activity}</p>
                </div>
            </div>

            <button className="delete-btn" onClick={(e) => {
                e.stopPropagation();
                onDelete(data.id);
            }}>
                취소
            </button>
        </div>
    );
}

export default BucketItem;