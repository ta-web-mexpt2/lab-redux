![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React Redux | IronStore

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-".

## Deliverables

Complete all of the non-bonus iterations. No styling is required, but is suggested as bonus.

## Instructions

## Introduction

![ecommerce](https://media.datacenterdynamics.com/media/images/Ecommerce.width-880.jpg)

E-commerce or electronic commerce is ...

A system for buying and selling products and services that uses the Internet as the main medium of exchange.

In other words, it is a business that manages collections and payments through electronic means.

## Part 1

### Iteration 1 | Json server setup

First of all, we have to configure the `json-server` in order to use it as our API.

At this point you should have installed `json-server` if you don't yet, [check this out](https://github.com/typicode/json-server).

Create the `db.json` file and add the `products` and the `carts` keys as an arrays into the file then create the npm script to run the server.

### Iteration 2 | Redux config

Install the corresponding dependencies to use redux in your app

Create the store and add the provider in order to access the data in the app.

## Part 2

### Iteration 3 | Services

Create the services for the Read and create processes of the products and services to add and remove items to your cart.

### Iteration 4 | actions and reducers

In this application, we going to focus on 2 processes, the Read and create processes for the products and the process to handle items in our cart and get our total.

Create the action types and the action creators in order to complete all the processes of the `CRUD` including the success and error cases besides the actions to add items to the cart.

Also, create the reducers corresponding to those processes.

Use the `ducks` pattern for this.

### Iteration 5 | Thunks

Remember that if we want to handle async actions in our app we have to give the ability to `redux` to handle those processes, we going to use the `redux-thunks` library for this purpose.

Install and configure `redux-thunks`, ones this has been done, create the proper thunks in order to handle the async processes like API requests.

## Part 3

### Iteration 6 | Router

Install and configure `react-router`, then create the routes for at least, showing the existing products, create new products, and showing the cart with the total.

### Iteration 7 | Views

Create the views for at least, showing the existing products, create new products, and showing the cart with the total.

## Bonus

### Iteration 8 | Styles

Use any library you want to style your app.

### Iteration 9 | Complete the CRUD

Complete the remaining `CRUD` processes such as update and delete of products and the cart.

### Iteration 10 | Configure redux dev tool

Configure `redux-devtools` for debugging purposes.
