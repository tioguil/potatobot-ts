import { Command } from '../domains/Command';
import { Hello } from './commands/Hello';
import { Ping } from './commands/Ping';
import { Play } from './commands/Play';

export const RegisteredCommands: Command[] = [Hello, Ping, Play];
