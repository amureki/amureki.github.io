# amureki.github.io

Source code for personal static website https://amureki.github.io

Used technologies:
- [Zola](https://www.getzola.org/)
- [tailwindcss](https://tailwindcss.com/)
- [markdown](https://www.markdownguide.org/)

## Installation

You would need to have `brew` and `nvm` installed on your MacOS machine. 
For other OS, check out [Zola documentation](https://www.getzola.org/documentation/).

```bash
brew install zola
nvm use
npm install
```

## Development

To have a development server running with hot reload, run the following commands:

```bash
npm run watch
zola serve
```

## Deployment

To create a production build, run the following commands:

```bash
npm run build
zola build
```

The generated files will be in the `public` folder, which can be deployed to any static hosting service.
