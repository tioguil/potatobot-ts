import { Client, ClientOptions } from 'discord.js';
import { DisTube } from 'distube';
import { SpotifyPlugin } from '@distube/spotify';
import { SoundCloudPlugin } from '@distube/soundcloud';
import { YtDlpPlugin } from '@distube/yt-dlp';

export default class ClientDiscord extends Client {
  public distube: DisTube;
  public constructor(options: ClientOptions) {
    super(options);
    this.distube = new DisTube(this, {
      leaveOnStop: false,
      emitNewSongOnly: true,
      emitAddSongWhenCreatingQueue: false,
      emitAddListWhenCreatingQueue: false,
      plugins: [
        new SpotifyPlugin({
          emitEventsAfterFetching: true,
        }),
        new SoundCloudPlugin(),
        new YtDlpPlugin(),
      ],
    });
  }
}
