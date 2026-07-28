# Furniture Store Project

## Initial Setup
 - [x] Create repository
 - [x] Initial folder structure
 - [x] Add client resources

## Setup client dev env
 - [x] Install packages `npm i`
 - [x] Install vite `npm i -D vite`
 - [x] Add dev script  
 - [x] Add node_modules to .gitignore 

## Setup REST API
 - [x] Initialize project
 - [x] Add express
 - [x] Add gitignore
 - [x] Add base furniture controller
 - [x] Add routes
 - [x] Add CORS

## Authentication and Authorization
 - [x] Create user controller with register endpoint
 - [x] Add json parser
 - [x] Setup prisma orm database `https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres`
 - [x] Change node with tsx
 - [x] Add user model
 - [x] Add validation
 - [x] Hash password with zod transform and bcrypt
 - [x] Generate token 
 - [x] Add logout
 - [x] Add login to user controller
 - [x] Add auth middleware
 - [ ] Add isAuth middleware

## Furniture Endpoints
 - [x] Create furniture endpoint
 - [x] Add create furniture schema
 - [x] Validate input
 - [x] Add error util for messages
 - [x] Add Furniture model
 - [x] Add furniture service with create method
 - [ ] List all furnitures
 - [ ] Map id to _id
 - [ ] Furniture details

## Ownership Functions
 - [ ] Setup one to many relation
 - [ ] Add owner on furniture create
 - [ ] Delete furniture
 - [ ] Edit furniture
 - [ ] My furnitures

## Bonus
 - [ ] Invalidate user session