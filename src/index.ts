import * as dotenv from 'dotenv';
import ready from './listeners/_Ready';
import * as process from 'process';
import interactionCreate from './listeners/InteractionCreate';
import PlaySong from './listeners/PlaySoung.DisTube';
import ClientDiscord from './domains/ClientDiscord';
dotenv.config();

const botDiscordToken = process.env.BOT_DISCORD_SECRET;

console.log('Bot is starting...');

const client = new ClientDiscord({
  intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates'],
});

PlaySong(client.distube);
ready(client);
interactionCreate(client);

client.login(botDiscordToken);
