import img1 from "../Assets/motionarteffect-img1.png";
import img2 from "../Assets/motionarteffect-img2.png";
import img3 from "../Assets/motionarteffect-img3.png";
import Reviewcard from "./reviewCard";

const Reviews = () => {

  const imgs = [img1,img2,img3];

  return(
    <div className="review-container">
      <p className="trusted">Trusted by thousands of users around the world
      </p>
      <div className="reviews">
        {imgs.map((img,index) => <Reviewcard url={img} key={index}/>)}
      </div>
    </div>
  )
}

export default Reviews;