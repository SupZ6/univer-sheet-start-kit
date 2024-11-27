import process from 'node:process';
import { univerPlugin } from '@univerjs/vite-plugin';
import { defineConfig, loadEnv } from 'vite';
import packageJson from './package.json';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [univerPlugin()],
    define: {
      'process.env.UNIVER_CLIENT_LICENSE':
        // eslint-disable-next-line no-constant-binary-expression
        `"${env.UNIVER_CLIENT_LICENSE}"` || '"%%UNIVER_CLIENT_LICENSE_PLACEHOLDER%%"',
      'process.env.UNIVER_VERSION': `"${packageJson.dependencies['@univerjs/core']}"`
    }
  });
};
