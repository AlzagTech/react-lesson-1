import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Avatar,
  UserInfo,
  UserName,
  UserBox,
  Date,
  Tag,
} from './BlogCard.styled';
import { formatDate } from 'helpers/formatDate';

export const BlogCard = props => {
  const { poster, tag, title, description, userName, avatar, postedAt } = props;
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={tag} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={userName} />
          <UserInfo>
            <UserName>{userName}</UserName>
            <Date>{formatDate(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
};
