import PropTypes from 'prop-types';
import {UserCard, Avatar, Name, Stats, StatsItem} from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => (
    <UserCard>
        <div className="description">
            <Avatar
                src={avatar}
                alt={username}
            />
            <Name>{username}</Name>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <Stats>
            <StatsItem>
                <span className="label">Followers </span>
                <span className="quantity"> {stats.followers}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Views </span>
                <span className="quantity"> {stats.views}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Likes </span>
                <span className="quantity"> {stats.likes}</span>
            </StatsItem>
        </Stats>
    </UserCard>
);

Profile.propTypes = {
username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
};