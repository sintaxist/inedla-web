const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className='item'>
            <div className='text'>
                <p>{description}</p>
            </div>
            <div className="details">
                <img className='img-circle' src={img} alt={name} />
                <p>{name}</p>
                <span>{address}</span>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;