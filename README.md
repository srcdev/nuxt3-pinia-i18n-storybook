# Starter kit for Nuxt3, Pinia, i18n, and Storybook

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Still in progress
- ~Install i18n~ Done
- ~Storybook i18n integration~ Done
- Install Pinia
- Storybook i18n Pinia

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Running Storybook

Due to Storybook not fully supporting latest version on NPM, requires node v16.19.0 (npm v8.19.3)
Shoutout to [BudiSalah](https://github.com/BudiSalah) for their [suggestions](<https://github.com/storybookjs/storybook/issues/20312#issuecomment-1417098012>) on installing Storybook with Nuxt3/Vite

```bash
nvm use
npm run storybook
```
