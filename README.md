# social-network-api   
API for Social Network Web Application using Express, MongoDB and Mongoose  

# Table of Contents   
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Description](#description)   
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)  
- [License](#license) 

## User Story  
AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data   
  
## Acceptance Criteria    
GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON   
WHEN I test API POST, PUT, and DELETE routes in Insomnia   
THEN I am able to successfully create, update, and delete users and thoughts in my database   
WHEN I test API POST and DELETE routes in Insomnia   
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list   

## Description     
This project consisted in building the back end for a social network web application. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. Models are included for Users and Thoughts, and a Schema for Reactions. Users can use this application to share their thoughts, create a friends list, and react to thoughts added by their friends.

## Installation   
Clone the repository in GitHub, and install Node.js and MongoDB. You will need to use Express.js and Mongoose packages.               

# Usage    
To use this application, open the integrated terminal and run npm init, then npm i (install). You might be required to also run 'npm install mongoose' as well. Seeding the database is optional, but will allow testing certain routes without needing to create users and thoughts from scratch. Finally, run 'node index' and open Insomnia to run the API routes.           

## Demo   

 

## Credits   
University of Arizona Coding Bootcamp resources (activities and lesson examples).    

## License  

MIT License

Copyright (c) 2023 anistone9

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


