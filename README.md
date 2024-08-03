<<<<<<< HEAD
# Full Stack Food Delivery Web Application (MERN Stack)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction
This is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more.

## Features
- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Stripe Payment Integration: Secure and reliable payment processing using Stripe.
- Order tracking
- Admin panel to manage menu items, orders

## Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Payment Gateway:** Stripe
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS

## Installation
### Prerequisites
- Node.js
- MongoDB

### Clone the Repository
```sh
https://github.com/nittsurendra/Full-Stack-Food-Delivery-Web-Application.git
cd mern-food-delivery-app
```

## Backend Setup
Navigate to the backend directory:

```sh
cd backend

```
Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="Your stripe key"
```

Start the backend server:

```sh
npm run server
```
## Frontend Setup
Navigate to the frontend directory:

```sh

cd frontend
```

Install dependencies:
```sh

npm install
```

Start the frontend server:
```sh

npm run dev
```

## Admin App Setup

Navigate to the admin directory:
```sh

cd admin
```

Install dependencies:

```sh
npm install
```

Start the admin app :
```sh
npm start
```

## Usage
Access the customer-facing app at http://localhost:5173.
Access the admin app at http://localhost:5174.
Register as a new user or log in with existing credentials.
Browse the menu, add items to the cart, and place an order.
Pay using dummy visa card
Use the admin panel to manage orders, menu items.

## Screenshots
![Screenshot 2024-08-03 151825](https://github.com/user-attachments/assets/2dc29d50-0b1b-409a-ae1e-a0c553b2a3ff)
![Screenshot 2024-08-02 174503](https://github.com/user-attachments/assets/79446e36-1a0f-4b7f-9767-6a7b8ddb850c)
![Screenshot 2024-08-02 174512](https://github.com/user-attachments/assets/45075b32-706c-4d0d-82c9-278780ffb65c)
![Screenshot 2024-08-02 174525](https://github.com/user-attachments/assets/d3be8b14-bd0d-463f-b495-0526dad39154)
![Screenshot 2024-08-02 174552](https://github.com/user-attachments/assets/c19f7683-5e1f-4fb5-90cb-3e6305132f77)
![Screenshot 2024-08-02 174602](https://github.com/user-attachments/assets/4c76f496-6ad7-457c-8ab0-7523ede19390)
![Screenshot 2024-08-02 174715](https://github.com/user-attachments/assets/04dbef85-a06d-47e5-883b-0663078e8142)
![Screenshot 2024-08-02 174806](https://github.com/user-attachments/assets/30b77e4c-fac8-4a09-bd50-66987134246b)


## API Documentation
The API endpoints for the backend can be documented using tools like Postman or Swagger. Include endpoints for user authentication, menu items, orders, and more.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include relevant tests.

## Contact
For any questions or suggestions, feel free to contact me.

Happy coding!

Feel free to customize this template according to your specific project details and requirements.
