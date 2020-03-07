import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
  transition: {
    default: Fade
  }
});