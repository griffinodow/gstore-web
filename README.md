[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <h3 align="center">G-Store</h3>
  <p align="center">
     G-Store is an online store that sells cookies for my portfolio
    <br />
    <a href="https://g-store.griffindow.com">View Website</a>
    ·
    <a href="https://github.com/griffinodow/gstore-web/issues">Report Bug</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
![Screenshot](./docs/gstore-screenshot.png)

This is the front-end web app of an online cookie store for my portfolio. Select a specified quanity of products to insert into a cart for purchasing. Then input test payment details to make a purchase.

### Features
- View products on the home page
- View product details on each products page
- Add a specified quanity of a product to the cart
- View all products and their quantities in the cart
- Summarize the cart on checkout and charge the total

### Ambition

The goal of this project was to communicate with an external CMS and payment processing system while using REST API paradigms.

### Built With

* [React.js](https://reactjs.org/)
* [Redux.js](https://redux.js.org/)
* [Sass](https://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [SquareSDK](https://squareup.com/ca/en)
* [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->
## Getting Started

### View Demo Site

[g-store.griffindow.com](https://g-store.griffindow.com/)

### Develop Locally

```bash
# Serve with hot reload at localhost:3000
npm run dev

# Build for production
npm run build
```

### Deploy Container

Deploy the front-end micro-service container with the following command.

```bash
docker run -p 3000:3000 griffinodow/gstore-web
```

This will allow the app to be served at: http://localhost:3000

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/griffinodow/gstore-web.svg?style=for-the-badge
[contributors-url]: https://github.com/griffinodow/gstore-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/griffinodow/gstore-web.svg?style=for-the-badge
[forks-url]: https://github.com/griffinodow/gstore-web/network/members
[stars-shield]: https://img.shields.io/github/stars/griffinodow/gstore-web.svg?style=for-the-badge
[stars-url]: https://github.com/griffinodow/gstore-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/griffinodow/gstore-web.svg?style=for-the-badge
[issues-url]: https://github.com/griffinodow/gstore-web/issues
[license-shield]: https://img.shields.io/github/license/griffinodow/gstore-web.svg?style=for-the-badge
[license-url]: https://github.com/griffinodow/gstore-web/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/griffinodow