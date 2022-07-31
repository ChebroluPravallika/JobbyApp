import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import './index.css'

const JobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails

  return (
    <li className="similarItems">
      <div className="profileContainer">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="company-logo-url"
        />
        <div>
          <h1 className="title">{title}</h1>
          <div className="rating-container">
            <AiFillStar className="star-icon" />
            <p className="count-rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="descHeading">Description</h1>
      <p className="similar-desc">{jobDescription}</p>
      <div className="locationCont">
        <div>
          <GoLocation className="location-logo" />
          <p className="location">{location}</p>
        </div>
        <div>
          <BsBriefcaseFill className="location-logo-brief" />
          <p className="location">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default JobItem
