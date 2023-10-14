// data collected from this website http://openapi.programming-hero.com/api/course/curriculum

const data =
  '{"success":true,"data":[{"_id":"0","name":"Milestone 0: Orientation","description":"","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-1.jpg","modules":[{"_id":"618bb4a9c1be0e62de022d7c","name":"Module -1: Welcome Video"},{"_id":"618bb4a9c1be0e62de022d7b","name":"Module 0: Orientation. How to get ready for this course"}]},{"_id":"1","name":"Milestone 1: Personal Portfolio","description":"","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-2.jpg","modules":[{"_id":"618bb4b364be4d62d8cf5ce7","name":"Module 1: Learn and Explore HTML as a Beginner"},{"_id":"618bb4bd496c936303573dda","name":"Module 2: Learn and Explore CSS as a Beginner"},{"_id":"618bb4c564be4d62d8cf5ceb","name":"Module 3: Git, source control, GitHub and hosting"},{"_id":"618bb4cf496c936303573de6","name":"Module 4: Build a beautiful and professional portfolio website"},{"_id":"618bb4daf0505262b777252d","name":"Module 5: Personal website, build a brand new website"},{"_id":"618bb4e764be4d62d8cf5ced","name":"Module 5.5: [Bonus] Box model, pseudo class, position"}]},{"_id":"2","name":"Milestone 2: Responsive Web Layout","description":"","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-3.jpg","modules":[{"_id":"618bb4f364be4d62d8cf5cf5","name":"Module 6: HTML 5 Semantic tags, audio, video, table, form"},{"_id":"618bb4fc64be4d62d8cf5cf9","name":"Module 7: More CSS, Icon, CSS3 animation"},{"_id":"618bb51af0505262b7772531","name":"Module 8: Responsive CSS Layout"},{"_id":"618bb5237f4d79632cd3e01f","name":"Module 8.5: CSS Recap, Debugging, Future Strategy"},{"_id":"618bb52ac1be0e62de022d7e","name":"Module 9:  HTML CSS only Landing Page"},{"_id":"618bb536c1be0e62de022d88","name":"Module 10: Responsive Website Assignment 2"},{"_id":"618bb542845fb3630afa978e","name":"Module 10.5: bonus "}]},{"_id":"3","name":"Milestone 3: CSS Frameworks","description":"","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-4.jpg","modules":[{"_id":"618bb54b845fb3630afa9791","name":"Module 11: Magic of Bootstrap (Getting started)"},{"_id":"618bb556c1be0e62de022d8e","name":"Module 12: Responsive Layout using Bootstrap"},{"_id":"618bb55f25b37f6339b1efc2","name":"Module 12.5: Bootstrap Review and Practice"},{"_id":"618bb568c1be0e62de022d93","name":"Module 13: Simple ecommerce landing page using Bootstrap"},{"_id":"618bb57125b37f6339b1efcf","name":"Module 14: A simple Introduction to Tailwind"},{"_id":"618bb57d25b37f6339b1efd6","name":"Module 15: Responsive Landing Page Assignment"},{"_id":"618bb586845fb3630afa9794","name":"Module 15_5: HTML, CSS, Bootstrap Bonus"}]},{"_id":"4","name":"Milestone 4: Introduction to JavaScript","description":"Learn JavaScript basic concepts. Explore simple problem solving, understand recursion and fundamental programming concepts","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-6.jpg","modules":[{"_id":"618bb59025b37f6339b1efe0","name":"Module 16: Introduction to JavaScript"},{"_id":"618bb59c25b37f6339b1efe3","name":" Module 17: Fundamental Concepts Array and conditionals"},{"_id":"618bb5b064be4d62d8cf5d36","name":"Module 17.5: Concepts Recap and Loop"},{"_id":"618bb5b864be4d62d8cf5d3a","name":"Module 18: Core Concepts functions and objects"},{"_id":"618bb5c064be4d62d8cf5d3b","name":"Module 19: Apply Javascript Concepts"},{"_id":"618bb5c925b37f6339b1efe4","name":"Module 19.5: JS Concept Recap"},{"_id":"618bb5d2845fb3630afa979e","name":"Module 20: JavaScript Simple Coding Problems"},{"_id":"618bb5ddf0505262b7772534","name":"Module 21: More JS Coding Problems"},{"_id":"618bb5e964be4d62d8cf5d48","name":"Module 21.5: Practice Basic JavaScript "},{"_id":"618bb5fb64be4d62d8cf5d50","name":"Module 22: Assignment"},{"_id":"618bb6037f4d79632cd3e02e","name":"Module 22.5: Basic JavaScript Bonus Module"}]},{"_id":"5","name":"Milestone 5: Integrate JavaScript","description":"Explore DOM. How don works. Add Event bubbles. Create simple interactive website like bank transactions, shopping cart, etc.","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-7.jpg","modules":[{"_id":"618bb60cc1be0e62de022d9c","name":"Module 23: How Javascript Works & DOM"},{"_id":"618bb614496c936303573e13","name":"Module 24: Event, addEventListener, Event bubble"},{"_id":"618bb61f64be4d62d8cf5d52","name":"Module 24-5: HTML, CSS, DOM Revision Day"},{"_id":"618bb626c1be0e62de022d9d","name":"Module 25: Baap Er Bank, simple bank transactions"},{"_id":"618bb62f64be4d62d8cf5d5e","name":"Module 26: Functional Bank(advanced) "},{"_id":"618bb63864be4d62d8cf5d63","name":"Module 26_5: Shopping Cart, develop an interactive Cart"},{"_id":"618bb64064be4d62d8cf5d65","name":"Module 27: Revisit Javascript and work on Shopping Cart"},{"_id":"618bb649496c936303573e24","name":"Module 28: String and Array useful methods"},{"_id":"618bb651496c936303573e29","name":"Module 28.5: Practice and revision day"},{"_id":"618bb658f0505262b777254a","name":"Module 29: Interactive Mac book Pro Assignment"},{"_id":"618bb660c1be0e62de022da1","name":"Module 29.5: Integrate Javascript Bonus Content"}]},{"_id":"6","name":"Milestone 6: Intermediate JavaScript, API","description":"Modern JavaScript, ES6, Create Dynamic Website. Implement API. Fetch API and understand tricky javaScript concepts.","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-8.jpg","modules":[{"_id":"618bb66964be4d62d8cf5d6e","name":"Module 30: JS Recap and  Basic ES6, ES2015"},{"_id":"618bb67025b37f6339b1eff1","name":"Module 31: (advanced) ES6, Class, Inheritance"},{"_id":"618bb677496c936303573e31","name":"Module 31.5 ES6 Recap and Practice"},{"_id":"618bb680f0505262b7772553","name":"Module 32: API, JSON, Data load, dynamic website"},{"_id":"618bb688845fb3630afa97ab","name":"Module 33: API Examples and edge cases"},{"_id":"618bb691845fb3630afa97b0","name":"Module 33.5: Recap and Even more API Examples"},{"_id":"618bb69d845fb3630afa97b6","name":"Module 34: JavaScript Tricky Concepts"},{"_id":"618bb6a464be4d62d8cf5d73","name":"Module 35: (advanced) JavaScript Object Concepts"},{"_id":"618bb6ac7f4d79632cd3e040","name":"Module 35.5 Have a World tour with API"},{"_id":"618bb6bb845fb3630afa97c2","name":"Module 36: Assignment-6 "},{"_id":"618bb6c2845fb3630afa97c9","name":"Module 36.5: Bonus API and JS Recap Concepts"}]},{"_id":"7","name":"Milestone 7: Explore Browser & Debug","description":"Explore Browser. Debug JavaScript application. Use Dev tool. Introduction to TypeScript, Regular Expression","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-9.jpg","modules":[{"_id":"618bb6cb496c936303573e3f","name":"Module 37: How JavaScript and Browser works"},{"_id":"618bb6d2496c936303573e40","name":"Module 38: Browser API and methods "},{"_id":"618bb6daf0505262b777255a","name":"Module 38.5: Browser API practice"},{"_id":"618bb6e364be4d62d8cf5d76","name":"Module 39: JavaScript debug, web debug, dev tool mastering"},{"_id":"618bb6ec64be4d62d8cf5d7c","name":"Module 40: More debug and Regular Expression"},{"_id":"618bb6f3f0505262b777255e","name":"Module 40.5: Devtool and debug practice"},{"_id":"618bb6fb496c936303573e46","name":"Module 41: Getting started with TypeScript"},{"_id":"618bb704496c936303573e4c","name":"Module: 42: JavaScript You need to know for React"},{"_id":"618bb70c7f4d79632cd3e046","name":"Module: 42.5 Browser Debug Practice Day"},{"_id":"618bb7137f4d79632cd3e047","name":"Module 43: Assignment -7"},{"_id":"618bb71b7f4d79632cd3e04b","name":"Module 43.5: Browser Debug bonus video"}]},{"_id":"8","name":"Milestone 8: Introduction to Simple React","description":"React Core concepts. Understanding Props, states, components. How React Works. Build Single Page Application using React.","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-10.jpg","modules":[{"_id":"618bb7287f4d79632cd3e055","name":"Module 44: Modern Front-end core concepts"},{"_id":"618bb72e845fb3630afa97d2","name":"Module 45: React Core Concepts, JSX, props, state"},{"_id":"618bb7377f4d79632cd3e05c","name":" Module 45.5: React Core Concept Recap and Practice day"},{"_id":"618bb73e7f4d79632cd3e060","name":"Module 46: Simple React Rest Countries "},{"_id":"618bb7487f4d79632cd3e067","name":"Module 47: (Conceptual) How React works"},{"_id":"618bb750c1be0e62de022db7","name":"Module 47.5: Practice and React Side things"},{"_id":"618bb759496c936303573e5d","name":"Module 48: Simple React SPA with simple e-commerce"},{"_id":"618bb76225b37f6339b1f004","name":"Module 49: (advanced) Save and searchable e-commerce"},{"_id":"618bb76d64be4d62d8cf5d82","name":"Module 49.5: Simple React Revision day"},{"_id":"618bb77325b37f6339b1f00a","name":"Module 50: React SPA Assignment 8"},{"_id":"618bb77d25b37f6339b1f00e","name":"Module 50.5: Simple React Bonus"}]},{"_id":"9","name":"Milestone: 9 React Router and States","description":"React Router Version 6, Material UI, Axios, Context API, Deploy","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-11.jpg","modules":[{"_id":"618bb784845fb3630afa97db","name":"Module 51:  React Bootstrap, Material UI, Axios, Rechart"},{"_id":"618bb78bc1be0e62de022dc1","name":"Module 52: Simple React Router Examples"},{"_id":"618bb793845fb3630afa97e2","name":"Module 52.5 Meal db search and routing"},{"_id":"618bb79bc1be0e62de022dca","name":"Module 53: ema-john with router and custom hook"},{"_id":"618bb7a3c1be0e62de022dcc","name":"Module 54: Router deploy, Simple Context API, devtool"},{"_id":"618bb7aa845fb3630afa97ea","name":"Module 54_5: React Router Practice"},{"_id":"618bb7b225b37f6339b1f012","name":"Module 55: Educational Website Assignment 9"},{"_id":"618bb7b8c1be0e62de022dcf","name":"Module 55.5: React Router bonus content"}]},{"_id":"10","name":"Milestone 10: React Authentication","description":"Firebase, Custom Hook, Private Route, Auth Integration, Google Login, Facebook Login, Email and password login","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-12.jpg","modules":[{"_id":"618bb7c125b37f6339b1f018","name":"Module 56: Simple React Firebase authentication"},{"_id":"618bb7cb845fb3630afa97fa","name":"Module 57: Email Password Authentication, Login Form"},{"_id":"618bb7d6496c936303573e67","name":"Module 57.5: Firebase Recap and Practice"},{"_id":"618bb7ddf0505262b7772568","name":"Module 58: React Auth Integration and Private Route"},{"_id":"618bb7e5f0505262b777256d","name":"Module 59: Private Route Recap with Ema-John"},{"_id":"618bb7edf0505262b7772570","name":"Module 59.5: Firebase auth and private Route Recap "},{"_id":"618bb7f3f0505262b7772572","name":"Module 60: Responsive React Website and React Recap"},{"_id":"618bb7faf0505262b7772576","name":"Module 61: React Router and Firebase Auth Recap "},{"_id":"618bb81e7f4d79632cd3e075","name":"Module 61.5: Firebase auth and Simple Site Practice"},{"_id":"618bb8297f4d79632cd3e078","name":"Module 62: React Auth Assignment 10"},{"_id":"618bb8367f4d79632cd3e07b","name":"Module 62.5: Add Google Map, MapBox GL to React"}]},{"_id":"11","name":"Milestone 11: Backend and Database Integration","description":"Introduction to Node, express, mongodb. Implement CRUD operations (Get, Post, Update, Delete)","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-13.jpg","modules":[{"_id":"618bb83f64be4d62d8cf5d8f","name":"Module 63: Getting Started with Node, Express and Api"},{"_id":"618bb8477f4d79632cd3e084","name":"Module 64: Mongodb, database integration, CRUD"},{"_id":"618bb855845fb3630afa9811","name":"Module 64.5: CRUD Update and Product Management Practice)"},{"_id":"618bb85d7f4d79632cd3e08b","name":"Module 65: Genius Car Node Mongo CRUD Recap "},{"_id":"618bb8657f4d79632cd3e08e","name":"Module 66: E-commerce site Node and Mongodb integration"},{"_id":"618bb91a7f4d79632cd3e0b4","name":"Module 67.5: Deploy to Heroku and Practice Problem"},{"_id":"618bb9217f4d79632cd3e0b6","name":"Module 68: Backend Database Milestone Assignment"},{"_id":"618bb9297f4d79632cd3e0bd","description":"","name":"Module 68.5: JWT token and image hosting"}]},{"_id":"12","name":"Milestone 12: Final Project (Complete Website)","description":"A full stack website. Nested Route. Admin Role. Payment gateway, JST. Responsive website. Deploy with live site","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-14.jpg","modules":[{"_id":"618bb9317f4d79632cd3e0be","name":"Module 69: Final Project Part-1 (Home page)"},{"_id":"618bb939496c936303573e8f","name":"Module 70: Final Project Part-2 (Appointment)"},{"_id":"618bb941496c936303573e90","name":"Module 71: Final Project Part-3 (Auth Recap)"},{"_id":"618bb949845fb3630afa9827","name":"Module 72: Final Project Part-4 (Dashboard)"},{"_id":"618bb951845fb3630afa982b","name":"Module 73: Final Project Part-5 (Secure Admin)"},{"_id":"618bb95864be4d62d8cf5da5","name":"Module 73.5: Final Project Deploy and Practice"},{"_id":"618bb95864be4d62d8cf5db5","name":"Module 74: Build your own Complete Project"},{"_id":"618bb95864be4d62d8cf5dd5","name":"Module 75: Payment gateway Stripe Integration"},{"_id":"618bb95864be4d62d8cf5de5","description":"","name":"Module 76: Image Upload, Live Site Deploy, React Router V6"}]},{"_id":"13","name":"Milestone 13: Intermediate Level React","description":"Explore React Native. Understanding Next JS. Class Components. Redux core concepts. Styled Components","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-15.jpg","modules":[{"_id":"618bb95864be4d62d8cf5df5","name":"Module 77: Introduction React Native, Next JS, Class Components"},{"_id":"618bb95864be4d62d8cf5dg5","name":"Module 77.5: useReducer, redux core concept, optional assignment"}]},{"_id":"14","name":"Milestone 14: Interview and Hiring","description":"Understanding simple Data Structures, Algorithms. Introduction to Object Oriented Programming. How to prepare for interview.","image":"https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-16.jpg","modules":[{"_id":"618bb95864be4d62d8cf5dh5","name":"Module 78: Data Structure, Algorithm, OOP, Problem Solving"},{"_id":"618bb95864be4d62d8cf5di5","name":"Module 79: Interview Preparation and Get Ready to be hired"},{"_id":"618bb95864be4d62d8cf5dk5","name":"Module 80: Last Module Grow as a web Developer"}]}]}';
