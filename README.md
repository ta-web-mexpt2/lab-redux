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

Create the services for the `CRUD` process of the products and services to add and remove items to your cart.

### Iteration 4 | actions and reducers

In this application, we going to focus on 2 processes, the `CRUD` process for the products and the process to add items to our cart and get our total.

Create the action types and the action creators in order to complete all the processes of the `CRUD` including the success and error cases besides the actions to add items to the cart.

Also, create the reducers corresponding to those processes.
