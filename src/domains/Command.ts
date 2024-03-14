import { CommandInteraction, ChatInputApplicationCommandData } from 'discord.js';
import ClientDiscord from './ClientDiscord';

export interface Command extends ChatInputApplicationCommandData {
  run: (client: ClientDiscord, interaction: CommandInteraction) => void;
}
