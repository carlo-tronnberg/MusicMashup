class MusicInfo {
  constructor() {
    this.mbid = '';
    this.description = '';
    this.albums = [];
  }

  setMbid(mbid) {
    this.mbid = mbid;
  }

  setDescription(description) {
    this.description = description;
  }
}

module.exports = { MusicInfo };
