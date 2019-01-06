export default class Form {
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

  addComma = (params, index) => {
    if ( index + 1 < params.length ) {
      return ', ';
    };

    return '';
  };

  destructure = () => {
    const params = this.params
        .map(param => param.name)
        .reduce((content, param, index) => content += `${param}${this.addComma(this.params, index)}`, '');

    return `const { ${params} } = this.props.entity;`;
  };

  generateInputs = () => {
    return this.params.reduce((content, param) => {
      const { labelName, name } = param;
      return content += `<div>
        <Label htmlFor="${labelName !== '' ? labelName : name}" />
        <Input context={this} type="text" name="${name}" placeholder="${name}" value={${name}} />
      </div>
      `;
    }, '');
  };

  generate = () => {
    return `
import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { Input } from '../elements/';

@observer
class ${this.key} extends Component {
  render() {
    ${this.destructure()}
    return (
      <Fragment>
      ${this.generateInputs()}
      </Fragment>
    );
  };
};

export default ${this.key};
    `
  };
};


