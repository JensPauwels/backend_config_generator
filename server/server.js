import fs from 'fs-extra';
import { Form, Model } from './models';
import config from './config';

const createDirectory = directory => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    };

    resolve(true);
  });
};

const saveFile = (fileName, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, (err, res) => {
      if (err) {
        reject(err);
        return;
      };

      console.log(`created ${fileName}`);
      resolve(res);
    });
  });
};


const createObjects = async () => {

  await createDirectory(`${__dirname}/../dist/forms`);
  await createDirectory(`${__dirname}/../dist/models`);

  const keys = Object.keys(config);

  keys.forEach(key => {
    const model = new Model(key, config[key]).generate()
    saveFile(`${__dirname}/../dist/models/${key}.js`, model);

    const form = new Form(key, config[key]).generate();
    saveFile(`${__dirname}/../dist/forms/${key}.js`, form);

  });
};


createObjects();
