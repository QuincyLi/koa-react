import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from './mapStateToProps'
import { mapDispatchToProps } from './mapDispatchToProps'

import Table  from 'root/Components/Table/Table';

@connect(mapStateToProps, mapDispatchToProps)
class MainPage extends Component {
  componentDidMount() {
    this.props.getAppList();
  }

  render() {
    return (
      <div>
        <Table
          data={this.props.data}
        />
      </div>
    );
  }
}

export default MainPage;
