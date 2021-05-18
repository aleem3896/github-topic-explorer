import styled from 'styled-components';
import { withTheme } from 'styled-components';

const StyledSearch = styled.div`
  width: 100%;
  position: relative;
  display: flex;
 
  .searchTerm {
      width: 33%;
      border: 5px solid ${props => props.theme.searchBar.borderColor};;
      padding: 4px;
      height: 15px;
      border-radius: 3px 3px 3px 3px;
      outline: none;
  }
`

const Search = (props)=>{
    return (
        <StyledSearch>
            <input className="searchTerm" type="text" onKeyDown={(e)=>props.onEnter(e)} placeholder="Search for a topic (e.g react, angular, ember etc)"/>
        </StyledSearch>
    )
}

export default withTheme(Search);