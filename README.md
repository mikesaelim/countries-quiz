# countries-quiz

Silly frontend app that challenges the user to name all the countries of the world. Heavily inspired by [Sporcle's quiz](https://www.sporcle.com/games/g/world), but uses none of their code.

Basically, I wanted a version of Sporcle's quiz that had a bigger map, so I made this for myself.

Under the covers, this is a very simple [React](https://reactjs.org/) app bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

----

## Development notes for my future self

Workflow:
* Make some changes
* `npm start` to run the app locally and playtest the changes
* `npm run lint` to run ESLint
* `npm test` to run Jest/Testing Library tests
* `npm run build` to build the assets and put them in the `/docs` folder
* Commit and push changes

This repo is set up to publish the `/docs` folder to GitHub Pages, following the instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
