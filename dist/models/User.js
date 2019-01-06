
import { observable } from 'mobx';
import { Validator, Param as param } from './';

export default class User {
@observable firstName;

  constructor(context, data) {
    this.validate = new Validator();
    this.firstName = param(data, 'firstName');

    this.validation = {
      firstName: this.validate.input,
    };

    this.validate.initializeErrors(this, this.validation);
  };

  toJSON = () => {
    return {
    firstName: this.firstName,
    }
  }
};
    