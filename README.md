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

Make sure to install the dependancies:

### Install Errors

If `npm install` exits with errors for peer dependancies in Vue packages:

- Remove storybook package entries from `package.json`
- Run the following package installs manually.

```bash
npm install --save-dev @storybook/addon-a11y @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/testing-library @storybook/vue3 @storybook/vue3-vite react react-dom storybook storybook-i18n
```

#### Storybook errors with duplicate templates

Delete one of the template folders located within `~/node_modules/@storybook/vue3/template/cli`

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
If using **nvm** set to use latest version of Node: `nvm use node`

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

### Known Storybook issue (to be resolved)

- Nuxt3 can import the stores directory so we don't have to import within each instance it's to be used. (`imports: { dirs: ["stores"]}`). Storybook as currently setup does not support this and each store has to be imported manually. This may not be a Storybook issue just I haven't figured out how to do this yet.

## Other references

- Handy matrix of common [viewports on YesViz device insights](https://yesviz.com/viewport)

## Updates

- updated: `"storybook": "node fixStorybookPackageJson.js && storybook dev -p 6006",` to `"storybook": "storybook dev -p 6006",` Latest version of Storybook (7.6.7) appears to have fixed previous start issue. Leaving `fixStorybookPackageJson.js` for time being until fix is definately stable.
- Recent nuxt package upgrade - remove auto import methods - now internal
