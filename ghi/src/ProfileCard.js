import React from 'react';

function ProfileColumn(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const dog = data;
                return (
                    <div key={dog.id} className="card mb-3 shadow card text-white bg-dark">
                        <img src="https://puppy-love-assets.s3.amazonaws.com/media/Willie_image.webp" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {dog.breed}
                            </h6>
                            <p className="card-text">
                                {dog.description}
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {dog.age}</li>
                            <li className="list-group-item">Gender: {dog.gender}</li>
                            <li className="list-group-item">Size: {dog.size}</li>
                            <li className="list-group-item">{dog.owner.email}</li>
                            <li className="list-group-item">{dog.owner.phone}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileColumns: [[], [], []]
        };
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
    }


    async handleOwnerChange(event) {
        const value = event.target.value;
        await this.setState({ owner: value })
        this.getDogs()
    }

    async componentDidMount() {

    }

    async componentDidMount() {
        const dogsResponse = await fetch(`http://localhost:8080/api/owners_dogs/${this.state.owner}/`);
        const ownerResponse = await fetch('http://localhost:8080/api/ownerVOs/');
        try {
            if (ownerResponse.ok) {
                const ownerData = await ownerResponse.json();
                this.setState({
                    owners: ownerData.owners
                });
            };

            if (dogsResponse.ok) {
                const dogsData = await dogsResponse.json();
                const requests = [];
                for (let dog of dogsData.dogs) {
                    const specificDogUrl = `http://localhost:8080/api/dogs/${dog.id}`;
                    requests.push(fetch(specificDogUrl));
                }
                const responses = await Promise.all(requests);
                const profileColumns = [[], [], []];
                let i = 0;
                for (const profileResponse of responses) {
                    if (profileResponse.ok) {
                        const details = await profileResponse.json();
                        profileColumns[i].push(details);
                        i = i + 1;
                        if (i > 2) {
                            i = 0;
                        }
                    } else {
                        console.error(profileResponse);
                    }
                }
                this.setState({ profileColumns: profileColumns });
            }
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        return (
            <>
                <div className="container">
                    <h2>Your Pup Profiles</h2>
                    <div className="row">
                        {this.state.profileColumns.map((profileList, index) => {
                            return (
                                <ProfileColumn key={index} list={profileList} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ProfileCard;