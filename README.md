# Ratemysurau.com

# Contributing

## pre-req

- docker
- make
- yarn

### Start here

1. clone this repo
2. `cd ratemysurau`
3. `cp .env.example .env`
4. I'm using https://uploadthing.com/ to upload images to S3, please create your own account get the API key, or you can reach out to me for API credentials
5. `yarn`
6. run `yarn setup-db` <- make sure make is installed
7. run `yarn dev` <- this will start the server and the client
8. run `yarn db-seed` <- this will seed the database with some data
9. go to `localhost:3000` to see the app

# TODO

- [ ] Add tests
