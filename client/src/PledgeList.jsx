import axios from 'axios';
import React from 'react';
import path from 'path';
import Pledge from './Pledge';
import PledgeInput from './PledgeInput';

class PledgeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: undefined,
      projectName: '',
      pledges: [],
    };
  }

  componentWillMount(currentProjectId = 1) {
    const projectUrl = path.join('/projects/', currentProjectId.toString());

    axios({
      method: 'get',
      url: projectUrl,
      contentType: 'application.json',
      data: JSON.stringify({ currentProjectId }),
    }).then(({ data }) => {
      this.importData(data);
    }).catch(err => console.error(err));
  }

  importData({ projectId, projectName, pledges }) {
    this.setState({ projectId, projectName, pledges });
  }

  render() {
    const { pledges } = this.state;
    const Pledges = (pledges && pledges.length !== 0)
      ? pledges.map((pledge, index) => <Pledge pledgeInfo={pledge} key={index} />)
      : <div>Invalid Product Page</div>;
    return (
      <div>
        <PledgeInput />
        {Pledges}
      </div>
    );
  }
}

export default PledgeList;
