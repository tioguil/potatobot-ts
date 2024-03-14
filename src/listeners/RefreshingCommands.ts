import * as dotenv from 'dotenv';
import { RegisteredCommands } from '../command/RegisteredCommands';
import process from 'process';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Command } from '../domains/Command';
dotenv.config();
const refreshingCommands = async () => {
  try {
    const botDiscordToken = process.env.BOT_DISCORD_SECRET;
    if (!botDiscordToken) {
      throw 'BOT_DISCORD_SECRET is mandatory';
    }

    const commands = RegisteredCommands.map((data) => data);
    const rest = new REST({ version: '10' }).setToken(botDiscordToken);

    console.log('Started refreshing application (/) commands.');
    console.log(commands);
    await rest.put(Routes.applicationCommands('698422823039008810'), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
    throw `[Refreshing Command failed] ${error}`;
  }
};

export default refreshingCommands;
