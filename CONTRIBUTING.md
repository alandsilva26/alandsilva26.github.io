## Data

All data is on firebase is available locally in `src/data/`.<br />

## Dependencies

| Name                    | Notes                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| REACT_APP_API_KEY       | Firebase api key (required for firebase components to work)              |
| REACT_APP_WEBHOOK_URL   | Discord webhook url(can be removed if code is commented)                 |
| REACT_APP_STEAM_API_KEY | Steam api key(can be removed if code is commented)                       |
| REACT_APP_STEAM_ID      | Steam 64 id (can be commented not even needed in environment variables)  |
| CI = false              | Configuration for deployment required for deployment to ignore warnings. |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.