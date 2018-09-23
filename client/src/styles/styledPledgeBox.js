import styled from 'styled-components';

const StyledPledgeListBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  #allGone {
    font-size: 20px;
    font-weight: bold; 
    pointer-events: none;
    disabled: true;
  }
`;

const StyledPledgeBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 3px;
  padding-top: 10px;
  padding-bottom: 5px;
  /* border: 1.5px solid rgba(211,211,211, 0.5); */
  border: ${props => props.permanentBorder || !props.available
    ? '1.5px solid rgba(0, 0, 0, 0.5)' : '1.5px solid rgba(211, 211, 211, 0.5)'};
  height: auto;
  width: 350px;
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  
  :hover {
    border: 1.5px solid rgba(0, 0, 0, 0.5);
  }
`;


const StyledPledgeBoxComponent = styled.div`
  height: auto;
  flex-basis: 80%;
  font-size: 14px;
  vertical-align: middle;
  margin-top: 15px;
`;

const StyledPledgeBoxComponentText = styled(StyledPledgeBoxComponent)`
  line-height: 20px;
  margin-top: 10px;
`;

export {
  StyledPledgeListBox,
  StyledPledgeBox,
  StyledPledgeBoxComponent,
  StyledPledgeBoxComponentText,
};
