const { MusicInfoController } = require('../controller/musicInfoController');
const { ConsoleRenderer } = require('./consoleRenderer');

function mbidIsValid(mbid) {
  return /^([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})$/.test(
    mbid,
  );
}
class ConsoleMashup {
  constructor() {
    this.musicInfoController = new MusicInfoController();
    this.renderer = new ConsoleRenderer();
  }

  async query(mbid) {
    if (!mbidIsValid(mbid)) {
      // eslint-disable-next-line no-console
      console.error(`${mbid} is not a correctly formatted MusicBrainz ID.`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Processing mbid: ${mbid}`);
      try {
        await this.musicInfoController.getMashupMusicInfo(mbid);
        this.renderer.print(this.musicInfoController);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err.message);
      }
    }
  }
}

module.exports = {
  ConsoleMashup,
};
