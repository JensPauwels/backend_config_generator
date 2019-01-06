const configuration = {
  Network: [
    {
      name: 'hostname',
      labelName: 'hostname',
      type: 'text',
      placeholder: '',
      defaultValue: '',
      validationOption: 'input',
      validationMessage : '', 
      listOptions: []
    },
    {
      name: 'ipv4',
      labelName: 'ipv4',
      type: 'text',
      defaultValue: '',
      placeholder: '',
      validationOption: 'input',
      validationMessage : '', 
      listOptions: []
    },
    {
      name: 'ipv6',
      labelName: 'ipv6',
      type: 'text',
      placeholder: '',
      defaultValue: '',
      validationOption: 'input',
      validationMessage : '', 
      listOptions: []
    },
  ],
  User: [
    {
      name: 'firstName',
      labelName: 'firstName',
      type: 'text',
      placeholder: '',
      defaultValue: '',
      validationOption: 'input',
      validationMessage : '', 
      listOptions: []
    }
  ]
};

const demoObject = {
  name: 'ipv4', // this refers to the name of the parameter in the object
  labelName: 'ipv4', //this refers to the translation key which is used for I18n
  type: 'text', // text, mail, password, list
  defaultValue: '', //anything posibble, even array brackets or an empty object since this is injected
  validationOption: 'input', // list with only a few possibilities 
  validationMessage : '', // empty to by defaulted
  listOptions: [] // this is an array which can be build by objects
}

export default configuration;
