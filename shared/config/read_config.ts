import * as fs from 'fs';

try {
  const rawData = fs.readFileSync('./config.json');
  const config = JSON.parse(rawData);
} catch (e) {
  console.error(e);
}