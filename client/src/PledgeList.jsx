import axios from 'axios';
import React from 'react';
import path from 'path';
import Pledge from './Pledge';
// const Pledge = require('./Pledge.jsx');

const server = 'http://localhost:3000';

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
    const projectUrl = path.join(server, '/project/', currentProjectId);
    // const projectUrl = server + '/project/' + currentProjectId;

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
      // console.log('heres the state', this.state);
    });
  }

  render() {
    var Pledges = this.pledges === 0 ?
      this.pledges.map((pledge, index) => <Pledge data={pledge} key={index} />) :
      <div>Hey There</div>;
    return (
      <div className='container'>
        {Pledges}
      </div>
    );
  }
}

export default PledgeList;
