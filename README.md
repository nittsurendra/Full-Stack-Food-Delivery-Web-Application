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
![f1_page-0001](https://github.com/user-attachments/assets/e4c7d596-2d54-4f0e-82cd-7ca4d0975052)
![f1_page-0002](https://github.com/user-attachments/assets/a94c7f22-cbb2-4069-aebe-0e2ce078c60e)
![f1_page-0003](https://github.com/user-attachments/assets/954bd897-7b3c-496f-8532-948d4cec0ce3)
![f2_page-0001](https://github.com/user-attachments/assets/3fddf755-6f9c-4ed9-8178-ac9a621558df)
![Screenshot 2024-08-02 174503](https://github.com/user-attachments/assets/5a0b8d33-190e-453c-bb40-838d22403bfc)
![Screenshot 2024-08-02 174512](https://github.com/user-attachments/assets/2450fbd2-574e-4abc-ae41-e20d2e4fdd85)
![Screenshot 2024-08-02 174525](https://github.com/user-attachments/assets/936cdfcc-f2e0-406c-8b85-8e9eb5afe3a2)
![Screenshot 2024-08-02 174552](https://github.com/user-attachments/assets/e19315fb-a715-4ed8-b3ec-0b0a022aba1c)
![Screenshot 2024-08-02 174602](https://github.com/user-attachments/assets/970a4fd5-656b-4584-82de-c825d2a51d87)
![Screenshot 2024-08-02 174715](https://github.com/user-attachments/assets/2651c33a-9e54-4cbc-a0de-4f9f753cc24c)
![Screenshot 2024-08-02 174806](https://github.com/user-attachments/assets/aa0df7c2-79ff-45d1-ac94-7c15de1fd9d2)

## API Documentation
The API endpoints for the backend can be documented using tools like Postman or Swagger. Include endpoints for user authentication, menu items, orders, and more.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include relevant tests.

## Contact
For any questions or suggestions, feel free to contact me.

Happy coding!

Feel free to customize this template according to your specific project details and requirements.
