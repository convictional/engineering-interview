# Engineering Challenge V3

## Overview

The purpose of this challenge is to gauge your experience with writing mapping and validation functions for transferring data from one data model to another. It’s one of the important aspects of the product that we are building, and provides helpful context around your comfort level and design choices working with integrations. The systems we work with sometimes have undocumented behavior when it comes to the way their data models interface with ours, which means we have to be creative.

To complete the challenge, write some code that handles the following specification in any language you like. We use Go internally, but we try not to be dogmatic about which language you use here. We’re looking for well thought out, maintainable and readable code in any language you want. That doesn’t mean over do it, nothing is worse than a file with two lines of comments for every single definition. Just do your best and help us understand your process.

## Jobs to be done

There are two primary objectives of this challenge:

1. Read in the product data located at https://my-json-server.typicode.com/samuelbeyeler/eng-challenge-proposal/products and convert it to a 'standard' format
1. Host an API that fulfills the API Contract found in `contract.yaml` using the data from step 1. (you can view this more easily in the [swagger editor](https://editor.swagger.io/), or with a tool such as [insomnia designer](https://insomnia.rest/products/designer/))

There are three 'optional' objectives: (a submission without these is 100% complete and will not be considered less than one with these, they will just add additional datapoints to the submission)

1. Adding unit tests to the application
1. Wrapping the application in a docker container
1. Using a persistence layer (NoSQL or SQL) and handling updates to the saved products

## Metrics

While there is no concrete 'grading rubric' for this challenge here are some of the areas we will look at while reviewing the submitted response:

* Is the API built to spec?
* Is the code built in a way to easily handle a second source of products? (example: how would your code work if we needed to pull products from two distinct APIs?)
* Is the code easy to understand without any extreme 'complexity bottlenecks'
* Was the submission easy to setup and test locally?
