class ConsoleRenderer {
  /* eslint-disable no-console */
  print(musicController) {
    this.musicInfo = musicController.musicInfo;
    this.issues = musicController.issues;
    if (musicController.mashupError) {
      console.log(musicController.mashupError);

      return;
    }
    if (musicController.artistName) {
      const spacing = 82 - musicController.artistName.length;

      console.log(
        `
 ___________________________________________________________________________________
| Mashup Data from MusicBrainz + WikiData + WikiPedia + CoverArtArchive for artist: |
| ${musicController.artistName + ' '.repeat(spacing)}|
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`,
      );
    }

    console.log(this.issues.join('\n'));
    console.log('');
    console.log(this.musicInfo);
  }

  getFormattedMusicInfo() {
    const { musicInfo } = this;

    return JSON.stringify(musicInfo);
  }
}

module.exports = {
  ConsoleRenderer,
};
