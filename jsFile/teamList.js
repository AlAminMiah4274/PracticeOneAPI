const loadTeams = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => displayTeams(data.teams))
}

const displayTeams = teams => {
    const teamContainer = document.getElementById('team-container');
    teams.forEach(team => {
        // console.log(team);
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('teamList');
        teamDiv.innerHTML = `
            <h3>Name: ${team.strTeam}</h3>
            <p><strong>Short Name:</strong> ${team.strTeamShort}</p>
            <p><strong>About Team:</strong> ${team.strDescriptionEN}</p>
            <p><strong>League:</strong> ${team.strLeague}</p>
        `;
        teamContainer.appendChild(teamDiv);
    })
}

loadTeams();