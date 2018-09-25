import styled from 'styled-components';

import { StyledBoxComponent } from './styledPledgeBox';

const StyledInputBarContainer = styled(StyledBoxComponent)`
  flex-direction: row;
  flex: 4;
  justify-content: center;
  border: 1.5px solid rgba(211,211,211, 0.5);
  margin-top: 20px;
  

    :hover {
      border-color: #009E74;
    }

    #currency {
      text-align: center;
      flex: 1;
      border: 1.5px solid rgba(211,211,211, 0.5);
      border-bottom: 0px;
      border-left: 0px;
      border-top:0px;
      color: rgba(211,211,211, 0.5);
    }

    :hover #currency {
      border: 1.5px solid #009E74;
      border-bottom: 0px;
      border-left: 0px;
      border-top:0px;
    }
`;

const StyledPledgeInputBar = styled.input`
    flex: 4;
    border: 0px;
    font-size: 16px
`;

export { StyledInputBarContainer, StyledPledgeInputBar };
