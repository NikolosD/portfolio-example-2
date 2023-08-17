import React from 'react';
import { Icon } from "../icon/Icon";

interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    const MAX_RATING = 5;
    const blackStars = Math.min(rating, MAX_RATING);
    const grayStars = MAX_RATING - blackStars;
    const starGap = '7px';

    return (
        <div>
            {Array.from({ length: blackStars }, (_, index) => (
                <span key={index} style={{ marginRight: starGap }}>
                    <Icon iconId={'blackStar'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
                </span>
            ))}
            {Array.from({ length: grayStars }, (_, index) => (
                <span key={index + MAX_RATING} style={{ marginRight: starGap }}>
                    <Icon iconId={'grayStar'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'} />
                </span>
            ))}
        </div>
    );
};

export default Rating;
