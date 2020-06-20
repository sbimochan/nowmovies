# Now Movies

Displays recent movies and TV shows

> Story:
> It was a 6 hour coding challenge. I liked the idea so I continued working on and gave a new UI to it.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e735779b-8ab9-455f-9a05-90e6c5cb079f/deploy-status)](https://app.netlify.com/sites/nowmovies/deploys)

## Instruction

`cp .env.example > .env`

It uses tmdb API. Get your API token from [here](https://www.themoviedb.org/documentation/api)

change .env manually or

`envsubst < .env.example > .env` if set on exports

For local:
`yarn start`

For deployment:
`yarn build`

`yarn deploy`
