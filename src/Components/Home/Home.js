import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const Home = () => {
	const [teamList, setTeamList] = useState([]);
	// console.log(teamList)

	useEffect(() => {
		fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
			.then(res => res.json())
			.then(data => setTeamList(data.teams))
	}, [])
	return (
		<div className="App">
			<Banner />
			<div className="p-5 mx-3 row row-cols-1 row-cols-md-3 g-4">
				{
					teamList.map(team => <Card key={team.idTeam} team={team} />)
				}
			</div>
		</div>
	);
};

export default Home;