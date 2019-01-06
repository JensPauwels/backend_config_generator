
import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { Input } from '../elements/';

@observer
class Network extends Component {
  render() {
    const { hostname, ipv4, ipv6 } = this.props.entity;
    return (
      <Fragment>
      <div>
        <Label htmlFor="hostname" />
        <Input context={this} type="text" name="hostname" placeholder="hostname" value={hostname} />
      </div>
      <div>
        <Label htmlFor="ipv4" />
        <Input context={this} type="text" name="ipv4" placeholder="ipv4" value={ipv4} />
      </div>
      <div>
        <Label htmlFor="ipv6" />
        <Input context={this} type="text" name="ipv6" placeholder="ipv6" value={ipv6} />
      </div>
      
      </Fragment>
    );
  };
};

export default Network;
    