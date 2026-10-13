# QuickRental

A full-stack web application that allows users to browse and rent technology equipment without the expense and commitment of purchasing it. QuickRental provides a straightforward way to explore available products, create an account, log in, and manage equipment rentals through a simple, user-friendly interface.

The platform offers technology equipment such as laptops, desktop computers, monitors, and other computer accessories for students, professionals, businesses, and individuals who need reliable equipment for work, school, projects, or events.

Each rental covers a one-month rental period, giving customers access to the technology they need without having to purchase it outright.

## User Stories

- **As a visitor**, I want to browse available technology equipment so that I can find products that fit my needs.
- **As a new customer**, I want to create an account so that I can access the website's rental features.
- **As a registered customer**, I want to log in so that I can access my account and manage my rentals.
- **As a customer**, I want to view the product options and prices so that I can make informed rental decisions.
- **As a customer**, I want to view my cart and remove items so that I can manage my selected equipment.
- **As a visitor**, I want to learn about QuickRental so that I understand the purpose of the service and its benefits.

## Technology Stack

### Frontend
- **React** – Component-based user interface development
- **HTML5** – Web page structure
- **CSS3** – Styling and responsive layouts
- **JavaScript (ES6+)** – Client-side functionality

### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend framework for APIs and server-side routing

### Database
- **MongoDB** – NoSQL database for data storage
- **MongoDB Native Driver & Mongoose** – Database connectivity, queries, and data modeling

### API
- **Claude** – AI integration for conversational assistance and intelligent responses through the Claude API

### Utilities & Development Tools
- **CORS** – Cross-Origin Resource Sharing
- **Nodemon** – Automatic server restarts during development

## Directory

```text
capstone-project/
├── client/
│   ├── public/
│   │   ├── img/
│   │   │   ├── dgxspark.png
│   │   │   ├── h100.png
│   │   │   ├── rtx5090.png
│   │   │   └── rtxpro6000.png
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.jsx
│   │   │   ├── ChatWidget.css
│   │   │   ├── ChatWidget.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.css
│   │   │   ├── ProductCard.jsx
│   │   │   ├── RegisterForm.css
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── SignInForm.css
│   │   │   └── SignInForm.jsx
│   │   │
│   │   ├── img/
│   │   │   └── wave.png
│   │   │
│   │   └── pages/
│   │       ├── App.css
│   │       ├── App.js
│   │       ├── App.test.js
│   │       ├── index.css
│   │       ├── index.js
│   │       ├── logo.svg
│   │       ├── reportWebVitals.js
│   │       └── setupTests.js
│   │
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
│
├── server/
│   ├── models/
│   │   ├── orders.js
│   │   ├── products.js
│   │   └── users.js
│   │
│   ├── routers/
│   │   ├── aiRouter.js
│   │   ├── ordersRouter.js
│   │   ├── productsRouter.js
│   │   └── usersRouter.js
│   │
│   ├── claude.js
│   ├── dbConnection.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

## MongoDB Example

```javascript
{
  _id: ObjectId('012345678910111213141516'),
  fname: 'John',
  lname: 'Smith',
  uname: 'jsmith',
  password: 'jsmith',
  email: 'jsmith@gmail.com',
  age: NumberInt('20'),
  registeredAt: ISODate('2026-10-06T15:22:36.309Z'),
}
```
