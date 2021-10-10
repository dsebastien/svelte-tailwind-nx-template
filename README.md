# Svelte, Tailwind and Nrwl NX template

A template repository including a Nrwl Nx workspace and a Svelte application configured to use Tailwind

## Getting started

- Clone this repository
- Run `yarn install`
- Run `yarn start`
- Open your browser and go to http://localhost:4200/
- Enjoy!

## Important configuration files

- workspace.json: `@nxext/svelte:build` is configured there to load a Svelte configuration
- apps/app/svelte.config.cjs: Svelte configuration that configures PostCSS
- postcss.config.js: configures PostCSS and loads Tailwind
- tailwind.config.js: configures Tailwind
