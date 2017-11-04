import React from 'react';
import './GithubCard.css';

const GithubCard = (props) => {
    return (
        <div className="Github-card">
            <img className="Github-card__avatar"
            src={ props.avatarUrl }
            alt={ props.name } 
            title={ props.name } />
            <div className="Github-card__name-wrapper">
                <div className="Github-card__title">
                    { props.name }&nbsp;/&nbsp;@{ props.userName }
                </div>
                <div className="Github-card__company">
                    { props.company }
                </div>
            </div>     
        </div>
    );
}

export default GithubCard;
