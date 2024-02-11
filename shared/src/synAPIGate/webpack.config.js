/ Using ES module import syntax
import { NxWebpackPlugin } from '@nx/webpack';
import { join } from 'path';

export default {
  output: {
    path: join(__dirname, '../../dist/apps/syn-apigate'),
  },
  plugins: [
    new NxWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
    })
  ],
};

