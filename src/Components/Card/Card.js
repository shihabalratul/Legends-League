import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
	const { strTeam, strTeamBadge, strSport, idTeam } = props.team
	return (
		<div>
			<div className="col ">
				<div className="card m-1 p-4 border-primary">
					<img src={strTeamBadge} className="card-img-top p-2 w-50 mx-auto " alt="..." />
					<div className="card-body">
						<h2 className="card-title">{strTeam}</h2>
						<p className="card-text">Sport type:{strSport}</p>
						<Link to={`/details/${idTeam}`}>
							<button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
						</Link>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;