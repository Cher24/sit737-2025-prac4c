SIT737-2025-Prac4C: Enhanced Functionality for the Calculator Microservice

Overview
- This project extends the functionality of a basic calculator microservice by adding advanced arithmetic operations and improving error handling. The goal is to enhance microservice reliability and user experience.

Features
- Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
- Advanced operations:
- Exponentiation (/power)
- Square root (/sqrt)
- Modulo (/mod)
- Improved error handling following microservice best practices

Technologies Used
- Node.js (JavaScript runtime)
- Express.js (Web framework for Node.js)
- GitHub (Version control)

Installation & Setup
- Prerequisites
    Ensure you have the following installed:
    Node.js
    Git

Clone the Repository
    git clone https://github.com/Cher24/sit737-2025-prac4c.git
    cd sit737-2025-prac4c

Install Dependencies
    npm install

Run the Server
    node server.js

API Endpoints
- Addition (GET /add?num1={value}&num2={value})
    Adds num1 and num2
    Example: /add?num1=10&num2=5 → Response: { "operation": "addition", "result": 15 }

- Subtraction (GET /subtract?num1={value}&num2={value})
    Subtracts num2 from num1
    Example: /subtract?num1=10&num2=5 → Response: { "operation": "subtraction", "result": 5 }

- Multiplication (GET /multiply?num1={value}&num2={value})
    Multiplies num1 and num2
    Example: /multiply?num1=10&num2=5 → Response: { "operation": "multiplication", "result": 50 }

- Division (GET /divide?num1={value}&num2={value})
    Divides num1 by num2
    Prevents division by zero
    Example: /divide?num1=10&num2=5 → Response: { "operation": "division", "result": 2 }

- Advanced Arithmetic Operations
    Exponentiation (GET /power?num1={value}&num2={value})
    Raises num1 to the power of num2
    Example: /power?num1=2&num2=3 → Response: { "operation": "exponentiation", "result": 8 }

- Square Root (GET /sqrt?num1={value})
    Finds the square root of num1
    Example: /sqrt?num1=25 → Response: { "operation": "square root", "result": 5 }

- Modulo (Remainder) (GET /modulo?num1={value}&num2={value})
    Finds the remainder when num1 is divided by num2
    Example: /modulo?num1=10&num2=3 → Response: { "operation": "modulo", "result": 1 }




- Error Handling
    The microservice implements robust error handling, including:
        Input validation (e.g., checking for missing or invalid parameters)
        Handling divide-by-zero errors
        Returning meaningful error messages

- Research on Error Handling Strategies
    This project also includes a 1-page research report on error handling strategies in microservices, covering:
        Circuit Breaker Pattern
        Retry Pattern
        Fallback Mechanism

- Contribution
    Fork the repository
    Create a new branch: git checkout -b feature-name
    Commit changes: git commit -m "Add feature"
    Push to branch: git push origin feature-name
    Open a Pull Request
  
------------------
Developed by Cher Supakovit
