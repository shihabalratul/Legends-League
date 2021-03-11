import { faFlag, faFutbol, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import stadium from '../../Photo/stadium.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';


const Details = () => {
	const { id } = useParams();
	const [team, setTeam] = useState({});
	const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = team;
	useEffect(() => {
		fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
			.then(res => res.json())
			.then(data => setTeam(data.teams[0]))

	}, [id])
	return (
		<div style={{ color: "white", backgroundColor: '#043927' }}>
			<div className="position-relative">
				<img style={{ opacity: '.7', backgroundColor: 'white' }} className="w-100" src={stadium} alt="" />
				<img className="position-absolute top-50 start-50 translate-middle h-50" src={strTeamBadge} alt="Team badge" />
			</div>

			<div style={{ backgroundColor: "#03AC13", borderRadius: "20px" }} className="w-75 mx-auto my-5 p-3 row">
				<div className="col-md-6">
					<h3>{strTeam}</h3>
					<p><FontAwesomeIcon icon={faMapPin} /> Founded: {intFormedYear}</p>
					<p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
					<p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
					<p>{
						strGender === 'Male' && <FontAwesomeIcon icon={faMars} />
					}
						{
							strGender === 'Female' && <FontAwesomeIcon icon={faVenus} />
						}
						 Gender: {strGender}</p>
				</div>
				<div className="col-md-6">

					<img className='w-100' src={strGender === 'Male' && male || female} alt="Male player" />


				</div>
			</div>
			<div className="w-75 mx-auto">
				<h5>Description:</h5>
				<p>{strDescriptionEN}</p>
				<div style={{ height: "50px" }} className="d-flex justify-content-center">
					<img onClick={() => window.open('https://'
						+ strFacebook, '_blank')} src={facebook} alt="" />
					<img onClick={() => window.open('https://'
						+ strTwitter, '_blank')} src={twitter} alt="" />
					<img onClick={() => window.open('https://'
						+ strYoutube, '_blank')} src={youtube} alt="" />


				</div>
			</div>
		</div>
	);
};

export default Details;