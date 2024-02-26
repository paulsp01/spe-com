# spe-com
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






