import { Command } from '../domains/Command';
import { Hello } from './commands/Hello';
import { Ping } from './commands/Ping';
import { Play } from './commands/Play';
import { Song } from './commands/Song';

export const RegisteredCommands: Command[] = [Hello, Ping, Play, Song];
