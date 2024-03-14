import { Client } from 'discord.js';
import { RegisteredCommands } from '../command/RegisteredCommands';
import refreshingCommands from './RefreshingCommands';

export default (client: Client): void => {
  client.on('ready', async () => {
    try {
      if (!client.user || !client.application) {
        return;
      }
      console.log(`[Registering the commands]`);
      // await refreshingCommands();
      RegisteredCommands.forEach((c) => console.log(`- ${c.name}`));
      await client.application.commands.set(RegisteredCommands);
      console.log(`[Registered commands]\n`);
      console.log(`[Bot status] ${client.user.username} is online`);
    } catch (e) {
      const msg = `Failed to start Bot: ${e}`;
      console.error(msg);
      throw msg;
    }
  });
};
