import { Command } from '../../domains/Command';
import { CommandInteraction, GuildMember } from 'discord.js';
import ClientDiscord from '../../domains/ClientDiscord';

export const Play: Command = {
  name: 'play',
  description: 'Play music',
  type: 1,
  options: [
    {
      required: true,
      type: 3,
      name: 'musica',
      description: 'Nome da musica ou artista',
    },
  ],
  run: async (client: ClientDiscord, interaction: CommandInteraction) => {
    if (!client.distube) {
      throw 'distube is undefined';
    }

    const musicAttribute = interaction.options.get('musica');
    if (!musicAttribute?.value) {
      throw 'musica is undefined';
    }

    if (!interaction.member) {
      throw 'member is undefined';
    }

    // @ts-ignore
    if (!interaction?.member?.voice.channel) {
      await interaction.followUp({
        ephemeral: true,
        content: 'Você precisa estar em um canal de voz',
      });
      return;
    }

    // @ts-ignore
    await client.distube.play(interaction?.member?.voice?.channel, musicAttribute?.value.toString(), {
      member: interaction.member as GuildMember,
      // @ts-ignore
      textChannel: interaction.member.textChannel,
    });

    await interaction.followUp({
      ephemeral: true,
      content: `Now playing`,
    });
  },
};
