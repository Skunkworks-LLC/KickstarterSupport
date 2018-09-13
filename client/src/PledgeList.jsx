import axios from 'axios';
import React from 'react';
import path from 'path';
import Pledge from './Pledge';

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
    const projectUrl = path.join('/project/', currentProjectId.toString());

    axios({
      method: 'get',
      url: projectUrl,
      contentType: 'application.json',
      data: JSON.stringify({ currentProjectId }),
    }).then(({ data }) => {
      this.importData(data);
    }).catch((err) => {
      return console.error(err);
    });
  }

  importData({ projectId, projectName, pledges }) {
    this.setState({ projectId, projectName, pledges }, () => {
      console.log('heres the state', this.state);
    });
  }

  render() {
    const { pledges } = this.state;
    const Pledges = (pledges && pledges.length !== 0)
      ? pledges.map((pledge, index) => <Pledge data={pledge} key={index} />)
      : <div>Invalid Product Page</div>;
    return Pledges;
  }
}

export default PledgeList;
