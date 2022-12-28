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

The client asked for a seamless transition from the home page  to either the group search page or the profile page. This was achieved with React Router, dynamically rendering each page when the user clicks on the links.
![](./readMeAssets/navbar.gif)

### User's Group List

This section displays the groups the user is a member of
![](./readMeAssets/userGroups.png)

### Feed

The feed displays user’s comments and responses to those comments. The feed is a central component of many of the main pages of Neighborly but it exists in different iterations depending on where the user is viewing it. For instance- the home feed displays all of the recent activity in the user’s groups, the profile feed displays all of the user’s recent activities across all of their groups and the group feeds display the activity in the specific groups. This was achieved by utilizing conditional database requests. User’s have the ability to like or unlike posts, respond to posts as well as delete their posts. Posts are ordered in descending order starting with the most recent.
![](./readMeAssets/homeFeed.gif)

### Map

The map component displays the exact location of events that are taking place through use of google maps api, dynamically rendering map markers based on the given address during event creation. The home page map displays all the events for all the groups you are a part of.
![](./readMeAssets/homeMap.gif)

### Calendar

After meeting with our client to review our wire frame and ensure that our visions aligned with the requested end product, a calendar to display when events are taking place was added on to our feature requests. The calendar renders the relevant group’s events, changing the dates color to easily identify which days have events scheduled. Selecting a date will list all the events happening that day.
![](./readMeAssets/homeCalendar.gif)

### Group Administration Panel

A user is automatically added as the administrator of any group they create. This panel displays a list of all the groups the user is the admin of. When another user submits a join request, the admin will be notified with a red badge and the total numbers of requests. Upon clicking the notification, a modal will pop up and the admin will have the ability to approve or deny all requests. When all requests are handled, modal will close. Or user can wait to handle requests at a later time and simply click again. 
![](./readMeAssets/groupAdminModal.gif)

### Create A Group

User’s can create groups by opening up a modal and providing some basic information as well as a profile photo. User’s are automatically assigned as administrators of any groups they create. 
![](./readMeAssets/createGroup.gif)

## Groups Page

### User's Group List

This section displays the groups the user is a member of
![]()

### Group Search

Here, the user can see a list of all groups created on the site. The user can search any keywords for a particular group, or browse the list provided. Below each group is a button to request to join that group, or a badge showing the user they are already a member.
![](./readMeAssets/searchAvailableGroups.gif)

### Available Groups List

![](./readMeAssets/availableGroups.gif)

## Group Page

### Map

The group page map displays the exact location of all the events for this specific group.
![](./readMeAssets/groupMap.gif)

### Events

This section displays all the events that are happening for the specific group. Showing all of the event’s information as well as giving the user the option to indicate if they are planning to attend the event- or cancel their RSVP. 
![](./readMeAssets/groupCalendar.gif)

### Create Event

A user can easily create an event for any group they a part of. Providing a name, description, date, time, address, and an image to this create event modal saves the event and instantly populates on the map and event list. 
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
