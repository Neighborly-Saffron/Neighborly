# Neighborly

## Overview

Neighborly is a private social media platform that’s safe for families and communities. Members can create groups and post events to strengthen community bonds.

## Table of Contents

- [Team](https://github.com/Neighborly-Saffron/Neighborly/tree/main#team)
- [Tech Stack](https://github.com/Neighborly-Saffron/Neighborly/tree/main#tech-stack)
- [Product Features](https://github.com/Neighborly-Saffron/Neighborly/tree/main#product-features)
  - [Login](https://github.com/Neighborly-Saffron/Neighborly/tree/main#login)
  - [Home Page](https://github.com/Neighborly-Saffron/Neighborly/tree/main#home-page)
  - [Groups Page](https://github.com/Neighborly-Saffron/Neighborly/tree/main#groups-page)
  - [Group Page](https://github.com/Neighborly-Saffron/Neighborly/tree/main#group-page)
  - [Profile](https://github.com/Neighborly-Saffron/Neighborly/tree/main#profile)
- [Getting Started](https://github.com/Neighborly-Saffron/Neighborly/tree/main#product-features)
- [Contributors](https://github.com/Neighborly-Saffron/Neighborly/tree/main#contributors)

## Team

- Andrew Dye
- Andrew Fuller
- Lei Liang
- Huong Nguyen
- Parker Sturtevant
- Gabe Yamartino

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Product Features

### Website Overview

![](./readMeAssets/overview.gif)

## Login

Login authentication with Auth0
![](./readMeAssets/authentication.gif)

## Home Page

### Navigation Bar

![](./readMeAssets/navbar.gif)

### User's Group List

This section displays the groups the user is a member of
![](./readMeAssets/userGroups.png)

### Feed

![](./readMeAssets/homeFeed.gif)

### Map

![](./readMeAssets/homeMap.gif)

### Calendar

![](./readMeAssets/homeCalendar.gif)

### Group Administration Panel

![](./readMeAssets/groupAdminModal.gif)

### Create A Group

![](./readMeAssets/createGroup.gif)

## Groups Page

### User's Group List

This section displays the groups the user is a member of
![]()

### Group Search

![](./readMeAssets/searchAvailableGroups.gif)

### Available Groups List

![](./readMeAssets/availableGroups.gif)

## Group Page

### Map

![](./readMeAssets/groupMap.gif)

### Events

![](./readMeAssets/groupCalendar.gif)

### Create Event

![](./readMeAssets/createEvent.gif)

### Chat

The chat is available for users in the group to have real-time communication with other group members
![](./readMeAssets/groupChat.gif)

## Profile

### User's Group List

This section displays the groups the user is a member of
![]()

### User Description

![](./readMeAssets/profile.png)

### User Feed

![](./readMeAssets/profileFeed.gif)

## Getting Started

### Installation

Ensure that you have node working on version 16.8.2 or higher. If you do not you can install it here https://nodejs.org/en/download/

#### Running in Production

In webpack.config.js, ensure mode is set to production. This will ensure the application is properly bundled for optimization.

```
module.exports = {
  mode: "production",
  ...
 }
```

> To run the build package in production mode run the following:

1. `npm run build`
2. `npm run server`
3. Open http://localhost:3001 in your browser

#### Running in Development

In webpack.config.js, ensure mode is set to development. This will ensure webpack re-bundles the application when changes are made.

```
module.exports = {
  mode: "development",
  ...
 }
```

> To run the build package in development mode run the following commands:

1. `npm start`
2. `npm run server`
3. Open http://localhost:3001 in your browser

#### Hosting

### Requirements

(https://nodejs.org/en/download/)

## Contributors

<a href="https://github.com/Neighborly-Saffron/Neighborly/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Neighborly-Saffron/Neighborly" />
</a>
