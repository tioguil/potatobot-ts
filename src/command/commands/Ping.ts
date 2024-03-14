import { Command } from '../../domains/Command';
import { Client, CommandInteraction } from 'discord.js';

export const Ping: Command = {
  name: 'ping',
  description: 'Returns a Hello Word',
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Pong!!';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
