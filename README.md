This project was bootstrapped with [Create React App]

  ## Instructions:
  
  ### `npm install`
  
  Download or clone the repository and run `npm install` in the terminal to install the required dependencies.

In the project directory inside of the folder server_houses, you can run:

### `npm run dev`

Runs the server that retrieves the data from the API.<br />

Then, inside of the folder houses_front, you can run:

### `npm start`

Runs the frontend side of the project with React.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Brief description:

I have used ES6 in the app, and services to retrieve the data from the API. There are two components, other than 'App':
Assets and Entities. Assets contains a list of assets from a company and entities respond to the information or departments inside of each asset.
You can access the entities by clicking the corresponding asset. In both components, Assets and Entities you will find a first row with the id/key of each object displayed in the screen.

## Things to improve:

Make the first row more user friendy and perhaps make it clickable for it to take you to the entities of that asset key.
