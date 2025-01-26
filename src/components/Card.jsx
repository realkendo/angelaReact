import Avatar from "./Avatar"
import Details from "./Details"


const Card = ({name, type, site, colors, img, num}) =>{
  return(
    <>
      <div className="bcard">
        <div className={colors}>
          <p>{num}</p>
          <h2>{name}</h2>
          <Avatar img={img} />
          <Details type={type} site={site} />
        </div>
      </div>
    </>
  )
}


export default Card;