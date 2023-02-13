# Starter kit for Nuxt3, Pinia, i18n, and Storybook

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## VS Code configuration

Settings and extensions will be automatically suggested.

Need to take over inbuilt TS checking to use Volar for Vue.

### Recommanded steps to have Vue Language Features (Volar) installed with typescript support

Ref: <https://github.com/johnsoncodehk/volar/discussions/471?sort=new>

- In extension search box, search: @builtin typescript
- disable "TypeScript and JavaScript Language Features" only inside active vue 3 workspaces
- In extension search box, search: Vue Language Features (volar) and install
- Reload VS Code, takeover mode should

## Still in progress

- ~Install i18n~ Done
- ~Storybook i18n integration~ Done
- ~Install Pinia~ Done
- ~Storybook i18n Pinia~ Done

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

Start the development server on <http://localhost:3000>

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
Shoutout to [BudiSalah](https://github.com/BudiSalah) for their [suggestions](https://github.com/storybookjs/storybook/issues/20312#issuecomment-1417098012) on installing Storybook with Nuxt3/Vite

```bash
nvm use
npm run storybook
```
