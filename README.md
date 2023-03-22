# Ratemysurau.com

# Contributing
## pre-req
- docker
- make
- yarn

### Start here
- clone this repo
- `cd ratemysurau`
- `cp .env.example .env`
- I'm using https://next-s3-upload.codingvalue.com/ to upload images to S3, please follow tutorial to setup your own bucket, or you can reach out to me for bucket credentials
- `yarn`
- run `yarn setup-db` <- make sure make is installed
- run `yarn dev` <- this will start the server and the client
- run `yarn db-seed` <- this will seed the database with some data
- go to `localhost:3000` to see the app

```
There's some help needed right now which is adding more mall inside `prisma/mall.json` following the existing convention
```
# TODO
- [ ] Add tests
- [ ] Add more seeding for malls around Malaysia
- [ ] 
