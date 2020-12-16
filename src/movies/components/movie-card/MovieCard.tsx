import * as React from "react"
import "./MovieCard.scss"
import { Button } from 'react-bootstrap';
import { secondsToHm } from '../../../common/helpers/TimeHelper';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock, faStar, faHeart);

interface MovieCardProps {
    id: string;
    title: string;
    description: string;
    picture: string;
    stars: number;
    duration: number;
    showAddToWishlist: boolean;
    isPlaylist: boolean;
    onAddToWishlist: (id: string) => void;
}

export default function MovieCard(props: MovieCardProps) {
    const allowedDescriptionLength = 70;
    const description = props.description.length > allowedDescriptionLength ?
        props.description.substring(0, allowedDescriptionLength) + "..." :
        props.description;


    function handleAddToWishlist() {
        props.onAddToWishlist(props.id);
    }

    return (
        <div className="movie-card" style={{backgroundImage: `url(${props.picture})`}}>
            <div className="gradient">
                <div className="header">
                    <Button variant="light" size="sm" onClick={handleAddToWishlist}>
                        <FontAwesomeIcon className={ props.isPlaylist? "red" : "gray" } icon={["fas", "heart"]} />
                    </Button>
                </div>
                <div className="spacer"/>
                <div className="body">
                    <h3>{props.title}</h3>
                    <p>{description}</p>
                    <div className="body-bottom">
                        <div className="duration-icon">
                            <FontAwesomeIcon icon={["fas", "clock"]}/>
                        </div>

                        <div className="duration-text">
                            {secondsToHm(props.duration)}
                        </div>

                        <div className="stars">
                            {
                                Array(5)
                                    .fill("")
                                    .map((_, i) => {
                                            return (
                                                <FontAwesomeIcon
                                                    icon={["fas", "star"]}
                                                    className={ i < Math.floor(props.stars) ? "yellow": "gray" }
                                                />
                                            )
                                        }
                                    )
                            }
                        </div>

                        <div className="stars-text">
                            {props.stars.toFixed(1)} of 5
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
