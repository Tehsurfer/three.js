import {
  CubeTexture,
  LoadingManager,
  TextureDataType
} from '../../../src/Three';

import { RGBELoader } from './RGBELoader';

export class HDRCubeTextureLoader {
  constructor(manager?: LoadingManager);
  manager: LoadingManager;
  hdrLoader: RGBELoader;
  path: string;

  load(type: TextureDataType, url: string, onLoad: (texture: CubeTexture) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
  setPath(value: string): this;
}
