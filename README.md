# spe-com

This project is an eCommerce API built with Node.js, Express.js. It provides endpoints for managing products, users, and shopping carts, along with JWT authentication for secure access. The API allows users to view and search for products, add items to their shopping carts. Users can create accounts, log in, and update their profiles. JWT authentication is implemented to ensure secure access to protected routes, allowing users to authenticate and access their own data securely. The API follows RESTful principles and utilizes middleware for handling requests, input validation, and error handling.  This project aims to provide a robust and scalable backend solution for eCommerce applications, with features for managing products, users and cart securely.


Doc Design for E-com API
localhost:3200
POST:
Users:
(FOR SIGNUP)
path:api/users/sign-up
Body:


   {
    "name":"surya",
    "email": "seller@ecom.com",
    "password": "Password1"
    "type":"Seller"
}
result:{
    "name": "surya",
    "email": "seller@ecom.com",
    "password": "Password1"
    "type": "Seller",
    "id": 3
}



          
(FOR SIGNIN)
path:api/users/sign-in
Body:{"email": "seller@ecom.com",
    "password": "Password1"
}
result:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImVtYWlsIjoic2VsbGVyQGVjb20uY29tIiwiaWF0IjoxNzA4OTE4Mjk2LCJleHAiOjE3MDg5MjE4OTZ9.AbfoRSs2eGBx5tczq6zjwK99GfplusNWtcyLt5HK-Sc


Products:
(FOR ADD PRODUCTS)
result:{
    "name": "shaitan",
    "price": 8907,
    "sizes": [
        "M",
        "XL"
    ],
    "imageUrl": "1708977937865band.jpg",
    "id": 4
}

path:api/products
(FOR RATE PRODUCT)
path:api/products/rate?userID=2&productID=1&rating=4
result:rating is added
  "name": "Product 1",
        "desc": "Description for Product 1",
        "price": 19.99,
        "imageUrl": "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
        "category": "Category1",
        "ratings": [
            {
                "userID": "2",
                "rating": "4"
            }
        ]

(FOR ADD IN  CART)
path:api/cartItems?productID=2&quantity=2
result:cart is updated


GET:
Products:
(FOR GET ALL PRODUCTS)
path:api/products
(FOR GET ONE PRODUCT)
path:api/products/:id
(FOR GET FILTER PRODUCT)
path:spi/products/filter?minPrice=10&maxPrice=20
(GET CART ITEMS  )
path:api/cartItems

DELETE:
Cart:
(FOR DELETE CART ITEM)
path:api/cartItems/:id


![Screenshot (145)](https://github.com/paulsp01/spe-com/assets/136374929/c006755d-cbd6-4e83-9948-2b61f0f98b3d)

![Screenshot (146)](https://github.com/paulsp01/spe-com/assets/136374929/21d1d3d4-0bfc-4e1d-b051-40aa66046ab1)

![Screenshot (141)](https://github.com/paulsp01/spe-com/assets/136374929/db4758bf-7fc9-4999-960a-c86308d563e9)

![Screenshot (141)](https://github.com/paulsp01/spe-com/assets/136374929/6db4b4f5-8c54-45d3-874b-943e3cd47bd9)
![Screenshot (148)](https://github.com/paulsp01/spe-com/assets/136374929/98207306-27fd-4c9e-9605-deacd75e7b2d)
![Screenshot (149)](https://github.com/paulsp01/spe-com/assets/136374929/10862557-38d9-4b9c-9dda-26c4c31a98f4)
![Screenshot (150)](https://github.com/paulsp01/spe-com/assets/136374929/858ae96b-c194-409c-a722-a2168b9b11d0)
![Screenshot (151)](https://github.com/paulsp01/spe-com/assets/136374929/fb9a4a34-6eee-49a2-bf37-d00d87a6bb87)

![Screenshot (143)](https://github.com/paulsp01/spe-com/assets/136374929/f8b8b9ce-89c8-4fd3-8eb8-ada1121d96f1)
![Screenshot (144)](https://github.com/paulsp01/spe-com/assets/136374929/544867f6-27bb-4a2a-9539-0a3c38dbbaf8)
![Screenshot (147)](https://github.com/paulsp01/spe-com/assets/136374929/d905a774-729f-43b6-b453-4ba5872a6c1c)
![Screenshot (152)](https://github.com/paulsp01/spe-com/assets/136374929/de69568b-d396-4010-9277-c7461826f271)
