import { DisTube } from 'distube';

export default (clientDisTube: DisTube): void => {
  clientDisTube.on('addSong', async (queue, song) => {
    console.log('addSong foi chamado');
    queue?.textChannel?.send(`A música ${song.name} foi adicionada à lista.`);
  });
};
