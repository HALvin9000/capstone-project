# QuickRental

A full-stack web application that allows users to browse and rent technology equipment without the expense and commitment of purchasing it. QuickRental provides a straightforward way to explore available products, create an account, log in, and manage equipment rentals through a simple, user-friendly interface.

The platform offers technology equipment such as laptops, desktop computers, monitors, and other computer accessories for students, professionals, businesses, and individuals who need reliable equipment for work, school, projects, or events.

Each rental covers a one-month rental period, giving customers access to the technology they need without having to purchase it outright.

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