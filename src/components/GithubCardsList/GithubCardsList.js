import React from 'react';
import './GithubCardsList.css';

import GithubCard from '../GithubCard/GithubCard.js';

const GithbutCardsList = (props) => {

    return (
        <div className="GithubCardsList">
            { props.cards.map (card => <GithubCard {...card} />)}
        </div>
    );
};

export default GithbutCardsList;