import axios from 'axios';
import React from 'react';
import reactDOM from 'react-dom';
import Pledge from './Pledge.jsx';
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

  componentWillMount() {
    axios({
      method: 'get',
      url: projectUrl,
      contentType: 'application.json',
    }).then((response) => {
      console.log('request completed');
    }).catch((err) => {
      return console.error(err);
    });
  }

  render() {
    return <Pledge />;
  }
}

export default PledgeList;
