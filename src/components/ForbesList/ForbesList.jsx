import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';
import PropTypes from 'prop-types';

export const ForbesList = ({list}) => {
  return (<LeaderBoard>
    <BoardHeader>
      <BoardTitle>
        <TitleTop>Forbes</TitleTop>
        <TitleBottom>Leader board</TitleBottom>
      </BoardTitle>
    </BoardHeader>
  
    <LeaderBoardProfiles>
      {list.map(forb=><ForbesListItem  
      key={forb.id}
      avatar={forb.avatar} 
      name={forb.name} 
      capital={forb.capital} 
      isIncrease={forb.isIncrease} />)}
    </LeaderBoardProfiles>
  </LeaderBoard>)
};


ForbesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.number.isRequired,
    isIncrease: PropTypes.bool.isRequired
})).isRequired
}