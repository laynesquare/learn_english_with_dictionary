</br>
<p align="center">
<img width='600' src='https://i.imgur.com/EOSLxYa.jpg'></img>
</p>

<div align="center">
  
[![see live](https://img.shields.io/badge/SEE%20LIVE-c26048?style=for-the-badge&logo=github)](https://laynesquare.github.io/learn_english_with_dictionary/)
 
#### -- Slow loading will occur because the back-end server is deployed on a free hosting service --
 </div>
  
<br/>

## Overview

#### Project Purpose

- Solve the inconvenience of encountering unknown words upon reading an English passage and having to look up elsewhere.

#### Feature Highlight

- Read multiple professional-written passages fetched via New York Times API with a juxtaposed dictionary to facilitate English learning.
- Co-located design of text and relevant keyword tags. You can explore more in a topic-oriented way.
- Responsive dictionary panel design that delivers an app-like reading experience even if you are on the go.

<br/>

## Tech Stack

- Language:<br/>

  ![Javascript](https://img.shields.io/badge/Javascript-c26048?style=for-the-badge)
  ![HTML](https://img.shields.io/badge/HTML-c26048?style=for-the-badge)
  ![CSS](https://img.shields.io/badge/CSS-c26048?style=for-the-badge)

- Frontend: <br/>

  ![React (hooks)](<https://img.shields.io/badge/React%20(Hooks)-c26048?style=for-the-badge>)
  ![React Redux](https://img.shields.io/badge/React%20Redux-c26048?style=for-the-badge)
  ![Material UI](https://img.shields.io/badge/Material%20UI-c26048?style=for-the-badge)

- Backend (mainly for hiding the API key): <br/>

  ![Node.js](https://img.shields.io/badge/Node.js-c26048?style=for-the-badge)
  ![Express](https://img.shields.io/badge/Express-c26048?style=for-the-badge)

- Tool & Platfrom: <br/>

  ![Axios](https://img.shields.io/badge/Axios-c26048?style=for-the-badge)
  ![Render](https://img.shields.io/badge/Render-c26048?style=for-the-badge)

<br/>

## Dive into the data flow

1. Once the search button is clicked, the browser will initiate an HTTP GET request sent to the REST API endpoint of the back-end server.

2. The carried keyword term in JSON form along with the request will then be handled by the backend, subsequently serving as the URL parameter for the New York Times API.

3. The backend will then relay the data fetched from the New York Times API to the frontend on which the returned data will be filtered using the destructuring assignment.

4. Only the relevant data will be then stored in the Redux's state container.

5. State changes trigger the re-rendering, and the text, images, and tags will be shown in the main display panel ultimately.

6. Every word within the given passages is clickable. Once it's clicked, another HTTP GET request will be initiated carrying the keyword which serves as the URL parameter for the Free Dictionary API.

7. The fetched data will be filtered using the destructuring assignment and stored in Redux's state container.

8. State changes trigger the re-rendering, and the definition, part of speech, and usage example will be shown in the main display panel ultimately.

<br/>

## Let's Get Started

- #### Clone the project

```
git clone https://github.com/laynesquare/learn_english_with_dictionary.git
```

### On Backend

- #### Specify the port number on which the back-end server runs on

```
PORT
```

- #### Specify cors origin to permit access from the frontend

```
CORS_ORIGIN
```

- #### Register an NYT API key to make queries and fetch data ( [![Register an NYT API key for](https://img.shields.io/badge/Register%20an%20NYT%20API%20key-c26048??style=flat-square)](https://developer.nytimes.com/accounts/create) )

```
NYT_API_KEY
```

### On Frontend

- #### Your English learning platform's back-end API

```
REACT_APP_LEARN_ENGLISH_API
```

### Start Development

- #### Under the respective client/server folder

```
npm install
npm run start
```
