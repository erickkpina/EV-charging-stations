# Electric Vehicle Charging Stations Finder

![website_screenshot](https://github.com/erickkpina/EV-charging-stations/assets/91835382/62d877ac-eaeb-4fa7-b073-e1c8aaeb6198)

The Electric Vehicle Charging Stations Finder is a web application that allows users to discover and locate electric vehicle charging points throughout the United Kingdom. This web application is powered by a CSV dataset containing information about more than 7,000 public charging stations. Users can explore the map to find the nearest charging station, plan routes, receive turn-by-turn directions, and even customize routes with intermediate waypoints.

## Features

- **Interactive Map**: The core feature of the website is an interactive map that displays the locations of electric vehicle charging stations across the United Kingdom.

- **Geolocation**: Users can enable geolocation to find the nearest charging station based on their current location.

- **Route Planning**: The website provides route planning capabilities. Users can input a starting point (either their current location or a point on the map) and receive step-by-step directions to the nearest charging station.

- **Click-to-Route**: By clicking on the map, users can initiate route planning to the nearest charging station from the selected location.

- **Custom Waypoints**: Users have the ability to customize their routes by adding intermediate waypoints. Simply drag the existing route to create a new stopping point. The map will automatically adjust the route to pass through this newly added waypoint.

## Technologies Used

- **Django**: The website is built using the Django web framework, which handles the back-end functionality and data management.

- **HTML and CSS**: The front-end user interface is created using HTML and styled with custom CSS and Tailwind CSS for a responsive design.

- **JavaScript**: JavaScript is used to enhance the user experience by adding interactivity and dynamic mapping features.

## Installation

To run this website locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/erickkpina/EV-charging-stations.git
   pip install -r requirements.txt
   python manage.py runserver

## URL

To see this site open this link:

https://ev-charging-stations-175f23e994de.herokuapp.com

## Commercial Use Disclaimer

This website is intended for non-commercial use only. It is provided as a free service to users and should not be used for any commercial purposes.

