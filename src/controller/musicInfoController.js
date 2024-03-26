const MusicBrainz = require('./apiMusicBrainz');
const WikiData = require('./apiWikiData');
const Wikipedia = require('./apiWikipedia');
const { MusicInfo } = require('../domain/musicInfo');

class MusicInfoController {
  constructor() {
    this.musicInfo = new MusicInfo();
    this.status = 'waiting';
    this.mashupError = '';
    this.issues = [];
  }

  async getMashupMusicInfo(mbid) {
    this.musicInfo.setMbid(mbid);

    try {
      const wikiDataId = await MusicBrainz.getWikiDataId(mbid);
      this.artistName = await WikiData.getWikiDataData(wikiDataId);

      const description = await Wikipedia.getWikipediaData(this.artistName);
      this.musicInfo.setDescription(description);

      this.musicInfo.albums = await MusicBrainz.getAlbums(mbid, this);

      return this.musicInfo;
    } catch (err) {
      this.mashupError = err.message;
      err.error = err.message;

      throw err;
    }
  }

  addIssue(issue) {
    this.issues.push(issue);
  }
}

module.exports = {
  MusicInfoController,
};
