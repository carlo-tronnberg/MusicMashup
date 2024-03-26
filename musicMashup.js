const { ConsoleMashup } = require('./src/console/consoleMashup');

const consoleMashup = new ConsoleMashup();

let mbid; // = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';

if (process.argv[2]) {
  [, , mbid] = process.argv;
  consoleMashup.query(mbid);
} else {
  // eslint-disable-next-line no-console
  console.info('Usage:\n node musicMashup.js <mbid>');
}
