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
4. I'm using https://next-s3-upload.codingvalue.com/ to upload images to S3, please follow tutorial to setup your own bucket, or you can reach out to me for bucket credentials
5. `yarn`
6. run `yarn setup-db` <- make sure make is installed
7. run `yarn dev` <- this will start the server and the client
8. run `yarn db-seed` <- this will seed the database with some data
9. go to `localhost:3000` to see the app

> There's some help needed right now which is adding more mall inside `prisma/mall.json` following the existing convention

# TODO

- [ ] Add tests
- [ ] Add more seeding for malls around Malaysia
