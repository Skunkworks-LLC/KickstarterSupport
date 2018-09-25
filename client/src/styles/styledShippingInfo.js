import styled from 'styled-components';

import { StyledBoxComponent } from './styledPledgeBox';

const StyledShippingInfoContainer = styled(StyledBoxComponent)`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  margin-top: 10px;
`;

const StyledShippingInfo = styled.div`
  flex-basis: 50%;
  align-content: flex-start;
  line-height: 18px;
  margin-left: 7.5%;
`;

const StyledSubHeaderTitle = styled.div`
  font-size: 11px;
  color: rgba(160,160,160, 1.5); 
  margin-bottom: 'none';
`;

export { StyledShippingInfoContainer, StyledShippingInfo, StyledSubHeaderTitle };