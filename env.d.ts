interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_DEV_TOOLS_ENABLED: boolean;
  VITE_APP_I18N_LOCALE: string;
  VITE_APP_I18N_FALLBACK_LOCALE: string;
  VITE_APP_VALIDATOR_COUNTRY: string;
  VITE_APP_BASE_URL: string;
  VITE_APP_ROOT_PATH: string;
  VITE_APP_HOST: string;
  VITE_APP_PORT?: string;
  VITE_APP_CDN_1_URL: string;
  VITE_APP_CDN_2_URL: string;
  VITE_APP_CDN_3_URL: string;
  VITE_MATOMO_SITE_ID: number;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
