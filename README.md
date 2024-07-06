Introduction=> Creates a project which create new transaction of user give portfolio of the user and their History>
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
MONGODB_URI=mongodb+srv://srishty46730:<password>@cluster0.q300pag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
id - srishty46730
pass - AItspjvJHUq088rh
# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Port
PORT=3000
