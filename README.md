## Evaluate News Article  with Natural Language Processing

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

This project is the final project for course 4 in FEND ND powered by [Udacity](https://www.udacity.com/).

## Build Tools
* HTML5
* CSS3
*Sass
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install npm
```
npm install
```
4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
    1. Install the dotenv package
   ```
   npm install dotenv
   ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
7. Start the project

Command | Action
:------------: | :-------------:
### To Run Project

**(Currently, prod mode allows you to see the results of the API fetch)**:
- cd into your new folder and run in prod mode
- `npm install`
- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8081`

**Note:** The web page can be accessed with `localhost:8081`

8. Open browser at http://localhost:8081/

------

Author: Omar Muhammed Ali.
