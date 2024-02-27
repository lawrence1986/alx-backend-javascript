// full_server/utils.js
import fs from 'fs/promises';

const readDatabase = (filePath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      const jsonData = JSON.parse(data);

      // Assuming the database structure is an object with fields as keys
      const result = {};
      Object.keys(jsonData).forEach((field) => {
        result[field] = jsonData[field].map((student) => student.firstname);
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export default readDatabase;
