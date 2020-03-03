# Engineering Interview Resources
A collection of resources for Convictional engineering interviews.

## Engineering Challenge V2

The purpose of this challenge is to gauge your experience with writing mapping and validation functions for transferring data from one data model to another. It’s one of the important aspects of the product that we are building, and provides helpful context around your comfort level and design choices working with integrations. The systems we work with sometimes have undocumented behavior when it comes to the way their data models interface with ours, which means we have to be creative.

To complete the challenge, write some code that handles the following specification in any language you like. We use Go internally, but we try not to be dogmatic about which language you use here. We’re looking for well thought out, maintainable and readable code in any language you want. That doesn’t mean over do it, nothing is worse than a file with two lines of comments for every single definition. Just do your best and help us understand your process.

Here are some things you might need:
* [before.json](https://github.com/convictional/engineering-interview/blob/master/v2/before.json) contains the existing data
* [after.json](https://github.com/convictional/engineering-interview/blob/master/v2/after.json) contains the format we want the data in thanks to your transform function

Here are the so called jobs to be done:
* Implement a method that can be called which takes before.json (above) and turns it into after.json
* You can use one or more functions to implement this requirement, implementation is up to you
* Please include test coverage that provides reasonable (not necessarily 100%) test coverage of your implementation
* Please provide a runnable solution, so that we can aim it at before.json locally and print after.json

To share your completed work, please create a private repo on GitHub and share it with roger@convictional.com so that we can review it. Let me know too, if it doesn’t notify me.
