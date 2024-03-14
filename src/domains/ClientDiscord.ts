import { Client } from 'discord.js';
import { DisTube } from 'distube';

export default class ClientDiscord extends Client {
  public distube: DisTube | undefined;
}
