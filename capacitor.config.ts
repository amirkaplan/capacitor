import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitor.www',
  appName: 'capacitor',
  webDir: 'dist/capacitor',
  server: {
    androidScheme: 'https'
  }
};

export default config;
