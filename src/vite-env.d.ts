/// <reference types="vite/client" />
/// <reference types="@univerjs/vite-plugin/types" />

import type { FUniver } from '@univerjs/facade';

declare global {
  interface Window {
    univerAPI: FUniver;
  }
}
