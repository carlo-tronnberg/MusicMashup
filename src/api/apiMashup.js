const { MusicInfoController } = require('../controller/musicInfoController');

function getMusicInfo(mbid) {
  const musicInfoController = new MusicInfoController();

  return musicInfoController.getMashupMusicInfo(mbid);
}

module.exports = {
  getMusicInfo,
};
