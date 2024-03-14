import * as dotenv from 'dotenv';
import ready from './listeners/_Ready';
import * as process from 'process';
import interactionCreate from './listeners/InteractionCreate';
import { DisTube } from 'distube';
import { SpotifyPlugin } from '@distube/spotify';
import { SoundCloudPlugin } from '@distube/soundcloud';
import { YtDlpPlugin } from '@distube/yt-dlp';
import PlaySong from './listeners/PlaySoung.DisTube';
import ClientDiscord from './domains/ClientDiscord';
dotenv.config();

const botDiscordToken = process.env.BOT_DISCORD_SECRET;

console.log('Bot is starting...');

const client = new ClientDiscord({
  intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates'],
});

client.distube = new DisTube(client, {
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

PlaySong(client.distube);
ready(client);
interactionCreate(client);

client.login(botDiscordToken);
