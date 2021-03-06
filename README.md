# Web App From Scratch @cmda-minor-web 1819
![weerapp](https://user-images.githubusercontent.com/43436118/81806807-473d2080-951d-11ea-99f5-16675dbe9594.PNG)

## What does your app do, what is the goal?
This app provides the user with a weather forecast.

## Tech
This application is built on

* HTML/CSS/vanillaJS
* Modular code
* DarkSkyAPI
* Transparency template engine
* Routie routing

## Installation
1. Open your terminal
2. Change directory to where you want to clone this repository, to the desktop for example

`cd desktop` 

3. Clone this repository

`git clone https://github.com/charder001/web-apps-from-scratch-1920`

4. Change direction into the newly created file

`cd web-apps-from-scratch-1920`

5. Install dependencies

`npm install`

6. Run application

`npm run`


## Which actors are there in your application?
* A URL builder will create the required URL for fetch requests
* The API will be used to fetch data to inject into the HTML
* Application will modify/reduce the JSON for my use case
* A router will handle navigation
* A template engine will be used to render JSON to HTML

# Actor diagram
![Actor diagram](https://user-images.githubusercontent.com/43436118/81809914-5ffc0500-9522-11ea-87ae-f414d2edf91b.png)


# interaction diagram
![Interaction diagram](https://user-images.githubusercontent.com/43436118/81810589-7eaecb80-9523-11ea-86d5-beeedf38eae9.png)


## Which API is used and what are the limitations?
For this app i will be using the Dark Sky API. I chose the dark sky API because it was recommended by our teachers. It is really easy to work with and has decent documentation. The API allows 1,000 free calls each day.

## API requests
This app requires the following data from the dark-sky API

- Weather temperature, precipitation chance, intensity and the 48 hourly forecast.

## What have i learned?
- ### Working with API's
I had never worked with an externaly API, so actually getting some real data to work with was really nice. I found the darksky and giphy API's really easy to work with and would reccomend them to anyone. 

- ### Fetching
This was also my first time using fetch requests. I had written a few old school http requests during my tech course, but most of my knowladge from this period has since departed my brain. This was really difficult for me, because it felt like i should know how most of these things work by now, but i find myself overestimating my skillset and what i'm actually capable of in this area sadly.

- ### Templating
I have limited experience with templating engines. During my internship i had to use the templating engine Twig, which was pretty different from what i used for this app, which turned out to be an interesting challenge. 

- ### Routing
Routing is something i had never done before, and wnile at first i could not really see the point, i now know the great potential that comes with routing and will definitely be using it more often. 

- ### Modular coding
During my tech course last year, the code i worked in was modular, but it was written by a team member. I knew how to work with modular code, but had never written or made some myself. I love how much easier it is to debug and when working in a team project, avoids conflcts.

## What would i like to add?
- More interaction
- Custom locations
- Prettier UI

