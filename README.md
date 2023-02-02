# Pokemon Wiki (by Region)

This repository contains my code for a frontend Pokemon wiki website that uses data from [PokeAPI](https://pokeapi.co/). This website is made using Vue 3. Click [here](https://pokedex-wiki.vercel.app/) to visit the deployed website.

## Note about website

- Some of the data being fetched are large, thus it may take 1-2 minutes to load the webpage. This is especially so for regions like paldea that has many pokemons

- Some pokemon's information may be missing/inaccurate. This is due to missing/inaccurate information from PokeAPI.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Local Setup

After downloading the code on your local environment. Run the command below.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Run Jest Component tests

```sh
npm run test:unit
```

## Design Considerations

1. Needed quick fix for UI so I opted to use [Core UI vue.js](https://coreui.io/vue/docs/getting-started/introduction.html) with prestyled components
2. Shifted all necessary data to a data folder and import them from component/views. This would help speed up future changes as I would only need change a single file.
3. Used fetch function provided from JavaScript library to fetch data from API. Could have used axios but I was more familar with fetch.
4. Considering to upgrade how data is fetch/rendered to reduce loading time. I will consider [virual scoller](https://github.com/Akryum/vue-virtual-scroller) during upgrading of website