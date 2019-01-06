export default class Model {
  constructor(key, params) {
    this.key = key;
    this.params = params;
  }

  addNewLine = (params, index) => {
    if ( index + 1 < params.length ) {
      return '\n  \t';
    };

    return '';
  };

  createObservables = params => {
    return params.reduce((content, param, index) => {
      return content += `@observable ${param.name};${this.addNewLine(params, index)}`;
    }, '');
  };

  createParams = params => {
    return params.reduce((content, param, index) => {
      return content += `this.${param.name} = param(data, '${param.name}');${this.addNewLine(params, index)}`;
    }, '');
  };

  createValues = params => {
    return params.reduce((content, param, index) => {
      return content += `${param.name}: this.${param.name},${this.addNewLine(params, index)}`;
    }, '');
  };

  enterDefault = (param, item, defaultValue = '') => {
    if (param !== undefined && item !== undefined && param[item] !== undefined && param[item] !== '') { 
      return param[item];
    };

    return defaultValue;
  };

  createValidation = params => {
    return params.reduce((content, param, index) => {
      return content += `${param.name}: this.validate.${this.enterDefault(param, 'validationOption', 'undefined')},${this.addNewLine(params, index)}`;
    }, '');
  };

  generate = () => {
    return `
import { observable } from 'mobx';
import { Validator, Param as param } from './';

export default class ${this.key} {
${this.createObservables(this.params)}

  constructor(context, data) {
    this.validate = new Validator();
    ${this.createParams(this.params)}

    this.validation = {
      ${this.createValidation(this.params)}
    };

    this.validate.initializeErrors(this, this.validation);
  };

  toJSON = () => {
    return {
    ${this.createValues(this.params)}
    }
  }
};
    `
  };
};

