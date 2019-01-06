
import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { Input } from '../elements/';

@observer
class User extends Component {
  render() {
    const { firstName } = this.props.entity;
    return (
      <Fragment>
      <div>
        <Label htmlFor="firstName" />
        <Input context={this} type="text" name="firstName" placeholder="firstName" value={firstName} />
      </div>
      
      </Fragment>
    );
  };
};

export default User;
    