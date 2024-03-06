Product App README
Welcome to the Product App! This application provides functionality for user authentication and product management through a set of APIs. Below, you'll find information on how to use the various features.

Table of Contents
    Getting Started
    Prerequisites
    Installation
    API Documentation
    User Authentication
    Product Management
    Pagination and Schema Requirements
    Getting Started
    Prerequisites

Make sure you have the following prerequisites installed:

    Node.js
    npm (Node Package Manager)
    MongoDB (Make sure the MongoDB server is running)


Installation
    Clone the repository:
    git clone https://github.com/your-username/product-app.git
    Navigate to the project directory:


Install dependencies:
    npm install

Start the application:
    npm start
    Now the Product App is up and running!


API Documentation
    User Authentication
        Login API
            Endpoint: POST /login
            Request:
            Requires a JSON payload with username and password.
            Response:
            Returns a JSON object containing a JWT token if authentication is successful.
        Register API
            Endpoint: POST /register
            Request:
            Requires a JSON payload with username and password.
            Response:
            Returns a JSON object with a success message if registration is successful.
            Product Management
            Create Product API
        Endpoint: POST /createProduct
            Request:
            Requires a JSON payload with product details (e.g., name, description, price).
            Requires a valid JWT token in the Authorization header.
            Response:
            Returns a JSON object with the created product details.
            Update Product API
        Endpoint: PUT /updateProduct/:id
            Request:
            Requires a JSON payload with updated product details.
            Requires a valid JWT token in the Authorization header.
            Response:
            Returns a JSON object with the updated product details.
            Delete Product API
        Endpoint: DELETE /deleteProduct/:id
            Request:
            Requires a valid JWT token in the Authorization header.
            Response:
            Returns a JSON object with a success message if the product is deleted.
            Get Products API
        Endpoint: GET /getProduct
            Request:
            Supports pagination using query parameters (e.g., page and limit).
            Response:
            Returns a JSON array with paginated product details.

            Pagination and Schema Requirements
            Pagination
            The GET /products API supports pagination using query parameters. You can specify the pageNumber and limit parameters in the request to navigate through the product list.

            Example:
            GET /products?pageNumber=2&limit=10
            This request fetches the second page of products, with each page containing 10 products.

    Schema Requirements
            The product schema requires specific parameters for creating and updating products. Ensure that the JSON payload includes the required parameters such as name, description, and price.
            Example:

            {
                "name": "Product Name",
                "description": "Product Description",
                "price": 29.99
            }

    Make sure to include all required parameters when making requests to the create and update product APIs.