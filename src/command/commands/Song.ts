import { Command } from '../../domains/Command';
import { CommandInteraction, quote } from 'discord.js';
import ClientDiscord from '../../domains/ClientDiscord';

export const Song: Command = {
  name: 'song',
  description: 'Returns current song',
  run: async (client: ClientDiscord, interaction: CommandInteraction) => {
    try {
      if (!interaction.guild) {
        throw 'guild is Null';
      }

      const queue = client.distube.getQueue(interaction.guild);

      if (!queue || !queue?.songs) {
        console.log('queue é null');
        await interaction.followUp({
          ephemeral: true,
          content: 'Nenhuma musica tocando!',
        });
        return;
      }

      let currentSong = queue.songs[0];
      const formattedCode = quote(`Tocando agora: ${currentSong.name}`);

      await interaction.followUp({
        ephemeral: true,
        content: formattedCode,
      });
      return;
    } catch (e) {
      console.error(e);
      await interaction.followUp({
        ephemeral: true,
        content: 'Error',
      });
      return;
    }
  },
};
