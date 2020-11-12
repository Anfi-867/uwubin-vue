[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ya-sach1/uwubin-vue">
    <img src=".github/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">uwubin-vue</h3>

  <p align="center">
    uwubin-vue is an attempt to make a pastebin clone, a very cute one.
    <br />
    <br />
    <a href="https://github.com/ya-sach1/uwubin-vue/issues">Report Bug</a>
    <a href="https://github.com/ya-sach1/uwubin-vue/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

-   [Node.js](https://nodejs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Express.js](http://expressjs.com/)
-   [Nuxt.js](https://nuxtjs.org/)
-   [MongoDB](https://www.mongodb.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

-   npm
-   mongodb

### Installation

1. Clone the repo

```sh
git clone https://github.com/ya-sach1/uwubin-vue.git
```

2. Install NPM packages

```sh
npm i # yarn
cd src/web && npm i # cd src/web && yarn

# If you are on Linux, remember to use sudo...
npm i -g typescript # yarn global add typescript
```

3. Add MongoDB URI

Navigate to src, create a new file named `Config.ts`, and add this into the file

```ts
export const uri: string = 'your-uri-here';
```

<!-- USAGE EXAMPLES -->

## Usage

First, start the Express server

```sh
npm run dev # yarn run dev
```

Then, start the Nuxt.js app

```sh
cd src/web && npm run dev # cd src/web && yarn run dev
```

Now, just navigate to http://localhost:3000/.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/ya-sach1/uwubin-vue/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

sach1 - [@ya_sach1](https://twitter.com/ya_sach1)

Project Link: [https://github.com/ya-sach1/uwubin-vue](https://github.com/ya-sach1/uwubin-vue)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Myself for doing everything.](https://github.com/ya-sach1)
-   [Misty for emotional support](https://github.com/SatanPanda)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ya-sach1/uwubin-vue-vue.svg?style=flat-square
[contributors-url]: https://github.com/ya-sach1/uwubin-vue/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ya-sach1/uwubin-vue.svg?style=flat-square
[forks-url]: https://github.com/ya-sach1/uwubin-vue/network/members
[stars-shield]: https://img.shields.io/github/stars/ya-sach1/uwubin-vue.svg?style=flat-square
[stars-url]: https://github.com/ya-sach1/uwubin-vue/stargazers
[issues-shield]: https://img.shields.io/github/issues/ya-sach1/uwubin-vue.svg?style=flat-square
[issues-url]: https://github.com/ya-sach1/uwubin-vue/issues
[license-shield]: https://img.shields.io/github/license/ya-sach1/uwubin-vue.svg?style=flat-square
[license-url]: https://github.com/ya-sach1/uwubin-vue/blob/master/LICENSE.txt
