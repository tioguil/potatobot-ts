import { DisTube } from 'distube';

export default (clientDisTube: DisTube): void => {
  clientDisTube.on('playSong', async (queue, song) => {
    queue?.textChannel?.send(`Tocando: ${song.name}`);
  });
};
