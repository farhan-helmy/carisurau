<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

# Carisurau.com (Formerly Ratemysurau.com)

## About The Project

🔹 Lost in the mall? Can't find a surau nearby? Prayer time almost over? 🥲

🌐 Introducing [Carisurau.com](https://carisurau.com), the best solution to find surau wherever you are!

🕌 Discover nearby suraus and prayer rooms, ensuring you don't miss prayer time, even if you're in an unfamiliar place.

⭐️ Can't find the surau you want? You can make a difference by adding it to our platform! With just one click of the 'Add Surau' button, you can help others find their way to a place of prayer.

### Built With

- Next.js
- TRPC
- AWS Lambda dan S3
- PostgreSQL

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Join us today and be part of this open source project that aims to make prayer accessible to all, everywhere.

### Prerequisites

- [Docker](https://www.docker.com)
- make
- [yarn](https://yarnpkg.com)
  - run `corepack enable` (Node.js >= 16.10)
  - run `npm i -g corepack` (Node.js < 16.10)

### Installation

1. Clone this repo.
2. Run `cd ratemysurau`
3. Run `cp .env.example .env` to create the .env file
4. Get a free API Key at [uploadthing](https://uploadthing.com/) <- I'm using this to upload images to S3
   - Create your own account and get the API key
   - Or you can reach out to me for API credentials
5. Run the following yarn commands:
   - `yarn`
   - `yarn setup-db` <- make sure make is installed
   - `yarn dev` <- this will start the server and the client
   - `yarn db-seed` <- this will seed the database with some data
6. Go to `localhost:3000` to see the app

## Roadmap

- [ ] Add tests

See the [open issues](https://github.com/farhan-helmy/ratemysurau/issues) for a full list of proposed features (and known issues).

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/farhan-helmy/ratemysurau.svg?style=for-the-badge
[contributors-url]: https://github.com/farhan-helmy/ratemysurau/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/farhan-helmy/ratemysurau.svg?style=for-the-badge
[forks-url]: https://github.com/farhan-helmy/ratemysurau/network/members
[stars-shield]: https://img.shields.io/github/stars/farhan-helmy/ratemysurau.svg?style=for-the-badge
[stars-url]: https://github.com/farhan-helmy/ratemysurau/stargazers
[issues-shield]: https://img.shields.io/github/issues/farhan-helmy/ratemysurau.svg?style=for-the-badge
[issues-url]: https://github.com/farhan-helmy/ratemysurau/issues
