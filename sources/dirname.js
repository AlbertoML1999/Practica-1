//dirname sirve para que aparezca el nombre del fichero que se está usando
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __dirname = dirname(fileURLToPath(import.meta.url));