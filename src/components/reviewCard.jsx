import stars from "../Assets/stars.png";

const Reviewcard = ({url}) => {
  return(
    <div className="card-container">
      <img src={url} alt="" />
      <div className="content">
        <img src={stars} alt="" />
        <p>4.5 Score, 9 Reviews</p>
      </div>
    </div>
  )
}

export default Reviewcard;