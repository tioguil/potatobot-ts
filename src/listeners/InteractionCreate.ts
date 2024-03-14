import { CommandInteraction, Client, Interaction } from 'discord.js';
import { RegisteredCommands } from '../command/RegisteredCommands';
import ClientDiscord from '../domains/ClientDiscord';

export default (client: ClientDiscord): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    console.log('interactionCreate');
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (client: ClientDiscord, interaction: CommandInteraction): Promise<void> => {
  const slashCommand = RegisteredCommands.find((c) => c.name === interaction.commandName);
  console.log(`[Command received]: ${slashCommand?.name} [received from player]: ${interaction.member?.user.username}`);

  if (!slashCommand) {
    console.error('Command not found');
    interaction.followUp({ content: 'An error has occurred' });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(client, interaction);
};
