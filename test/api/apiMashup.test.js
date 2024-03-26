const {
  MusicInfoController,
} = require('../../src/controller/musicInfoController');

jest.mock('../../src/controller/musicInfoController');

const { getMusicInfo } = require('../../src/api/apiMashup');

describe('Simulation API adapter', () => {
  beforeEach(() => {
    MusicInfoController.mockClear();
  });

  test('should start simulation', () => {
    // given
    const mbid = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';

    // when
    getMusicInfo(mbid);

    // then
    expect(MusicInfoController).toHaveBeenCalled();
    expect(
      MusicInfoController.mock.instances[0].getMashupMusicInfo,
    ).toHaveBeenCalled();
  });
});
