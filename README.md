Introduction=> Creates a project which create new transaction of user give portfolio of the user and their History>
The project aims to build a portfolio management system where users can manage their assets through transactions. It provides functionalities to view the portfolio's current state, its history, and supports creating new transactions for assets.

2. Technologies Used
Node.js: JavaScript runtime for server-side application.
Express.js: Web framework for Node.js to handle routing and middleware.
TypeScript: Typed superset of JavaScript for enhanced code quality and developer experience.
MongoDB: NoSQL database for storing portfolio data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
JWT (JSON Web Tokens): For authentication and authorization.
3. Key Features
Portfolio Management:

Calculate total portfolio value based on current asset prices.
Determine profit/loss based on transaction history and current asset prices.
Analyze asset allocation across the portfolio.
Transactions:

Implement CRUD (Create, Read, Update, Delete) operations for transactions.
Ensure atomicity and consistency of transactions using MongoDB transactions or similar mechanisms.
Authentication:

Implement JWT-based authentication for secure API endpoints.
Protect routes to ensure only authenticated users can perform actions.
Database Interaction:

Use MongoDB with Mongoose for storing and querying portfolio data.
Define schemas for Portfolio, Transaction, and potentially User data models.
Validation:

Validate incoming data for transactions to ensure correctness and consistency.
Use Mongoose schema validation for model fields.
Documentation:

Document the API endpoints using tools like Postman or Apidog.
Include detailed comments within the codebase to explain logic and functionality.
Environment Configuration:

Use environment variables (stored in .env file) for configuration details like MongoDB URI, JWT secret, and server port.
Maintain separate configurations for development and production environments.
4. Project Structure
The project can be structured as follows:


portfolio-management/
│
├── src/
│   ├── controllers/
│   │   ├── portfolioController.ts
│   │   ├── transactionController.ts
│   │   └── authController.ts
│   ├── models/
│   │   ├── Portfolio.ts
│   │   ├── Transaction.ts
│   │   └── User.ts
│   ├── routes/
│   │   ├── portfolioRoutes.ts
│   │   ├── transactionRoutes.ts
│   │   └── authRoutes.ts
│   ├── utils/
│   │   ├── auth.ts
│   │   └── validation.ts
│   ├── app.ts
│   ├── config.ts
│   └── server.ts
├── .env
└── tsconfig.json
Controllers: Handle business logic for portfolio management, transactions, and authentication.
Models: Define Mongoose schemas for Portfolio, Transaction, and User.
Routes: Define API endpoints using Express to route requests to appropriate controllers.
Utils: Helper functions for authentication (auth.ts), validation (validation.ts), etc.
Config: Configuration file (config.ts) to manage environment variables.
Environment Variables: Store sensitive information securely in .env.
5. Development Process
Setup: Initialize the project with required dependencies and configurations.
Coding: Implement controllers, models, routes, authentication middleware, validation, and database interactions.
Testing: Verify functionality using tools like Postman for API testing.
Documentation: Write API documentation and README file explaining setup, usage, and deployment instructions.
Deployment: Deploy to appropriate environments (e.g., local, staging, production) using environment-specific configurations.
Setup=>  mkdir portfolio-management
cd portfolio-management
npm init -y
npm install express mongoose jsonwebtoken body-parser bcryptjs dotenv typescript ts-node @types/node @types/express @types/mongoose
Run Api and make request 
for portfolio-http://localhost:3000/api/portfolio for portfolio history -> http://localhost:3000/api/portfolio/history For creating new transaction->http://localhost:3000/api/transactions
{
       
        "type": "deposit",
        "amount": 100,
        "asset": "Bitcoin",
        "price": 32000,
        "date": "2024-07-06T12:00:00.000Z"
    
    }

Tech Stack=> NodeJs , ExpresJs, Typescript,Mongodb
Environment Details =># MongoDB URI
MONGODB_URI=mongodb+srv://srishty46730:<AItspjvJHUq088rh>@cluster0.q300pag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Port
PORT=3000
