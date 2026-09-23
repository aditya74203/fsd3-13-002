## npm - Node Package Manager

- npm install <packageName>
- npm uninstall <packangeName>

to use npm, the project must be npm project, 
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  packages.json holds all the information relate to tinstall packages from npm
- update package.json type = "module"
- it also creates a folder node_modules automatically
- node_modulea holds the package/library files
- generally we ignore the nodemodules by .gitignore

Nodemon - it restart the server automatically when file changes, 
to instal
> npm i nodemon -D
Note: -D flag will install this packages as developer dependency 

- to execute any program, update the package.json file then start the server as 
<b> npm run dev <b>

# Installation
 Either through cloning with git or by using npm (the recommended way):

# npm install -g nodemon # or using yarn: yarn global add nodemon
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

# npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.

## Status Codes


- 200 -> Ok
- 201 -> Created
- 400 -> Bad request
- 401 -> Unauthorized
- 403 -> Forbidden
- 404 -> Not found
- 500 -> Internal 

## Content Type

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode

## res.end()

## send html file to client

1. html file

- read html file using createReadStream
- pipe it with res object

2. html content
    send any html tags/content by using 
    res.end ('<any html tag>')

## JSON 
  server returns data only not html contents because html content will be written by frontend developer. The data is in JSON format (JSON always store data in key value pair enclosed by {}, array can be store by [] one pair of curly bracket will represent one object and its property will be seperated by,)
  ```
    {
      id: 1,
      name: 'Mobile',
      price: 25,0000,
      rating: 4.5,
      reviews: 200
    }
  ``` 

  ## Headers 
 - header is used to tell the client, the type of data sent by the server it may be html file, json file/data, plain text file, css file, any tokens[for logged in]
 - Types
 1. text/plain -> text file
 2. text/html -> html contents/file
 3. application/json -> json contents/file
 4. text/css -> stylesheet
 5. application/form data -> for uploading file
 6. application/auth -> for tokens
the headers can be set by res object at server side by two ways-

1. res.setHeader
2. res.write

# GET-
  - if no parameter pass to the server and we receive all items.

# POST-
  - To add record we pass the value from body section in JSON format of API tester[echo API].
  
# DELETE- 
  - To delete any product we pass parameter that is id of the product from URL[url/id (id is parameter)]

# PUT/PATCH -
  - To update the product, here we pass the id from URL and data to update from body.     