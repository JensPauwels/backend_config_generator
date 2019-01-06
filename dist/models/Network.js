
import { observable } from 'mobx';
import { Validator, Param as param } from './';

export default class Network {
@observable hostname;
  	@observable ipv4;
  	@observable ipv6;

  constructor(context, data) {
    this.validate = new Validator();
    this.hostname = param(data, 'hostname');
  	this.ipv4 = param(data, 'ipv4');
  	this.ipv6 = param(data, 'ipv6');

    this.validation = {
      hostname: this.validate.input,
  	ipv4: this.validate.input,
  	ipv6: this.validate.input,
    };

    this.validate.initializeErrors(this, this.validation);
  };

  toJSON = () => {
    return {
    hostname: this.hostname,
  	ipv4: this.ipv4,
  	ipv6: this.ipv6,
    }
  }
};
    