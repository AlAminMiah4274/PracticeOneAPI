const loadUser = () => {
    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}

const displayUser = user => {
    // console.log(user);
    const userContainer = document.getElementById('user-container');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
        <img src="${user.picture.large}">
        <h5>Name: ${user.name.first} ${user.name.last}</h5>
        <p>Location- 
        City: ${user.location.city},
        Latitude: ${user.location.coordinates.latitude},
        Longitude: ${user.location.coordinates.longitude},
        Country: ${user.location.country},
        Post Code: ${user.location.postcode},
        State: ${user.location.state},
        Street Name: ${user.location.street.name},
        Street No: ${user.location.street.number},
        Timezone Description: ${user.location.timezone.description},
        Timezone Offset: ${user.location.timezone.offset}
        </p>
    `;
    userContainer.appendChild(userDiv);
}

loadUser();