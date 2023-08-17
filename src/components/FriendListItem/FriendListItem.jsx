import PropTypes from 'prop-types';
import { FriendCard, Status } from './FriendListItem.styled';


export const FriendItem = ({ avatar, name, isOnline }) => (
    <FriendCard>
    <Status isOnline={isOnline}></Status>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</FriendCard>
);

FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};