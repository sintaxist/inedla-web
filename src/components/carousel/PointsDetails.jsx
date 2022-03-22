const PointsDetails = ({pointDetail}) => {
    const {description, number} = pointDetail;
    return (
        <div className='item'>
            <div className='description'>
                <p>{description}</p>
                <span>{number}</span>
            </div>
        </div>
    );
};

export default PointsDetails;