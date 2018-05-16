# Userstory

- User can signup 
- User can login 

- User can create trips 
    - User can add cities (auto complete g-places) with start and end dates for each city 

- User can view trip details 
    - User can view full itinerary 
    - User can add reservations with links 
    - User can invite friends to view / edit a trip

- User can explore cities they added in their itinerary 
    - User can add things to do from suggested list 
    - User can create new things to do by searching (places autocomplete) or by dropping new pins

User can view all reservations 

# Routes

  ## User

  ### Authentication 

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |post     |/auth/signup                   |creates new user                                              |
  |post     |/auth/login                    |creates new user-session                                      |
  |post     |/auth/logout                   |deletes current session                                       |
  |get      |/auth/me                       |retrieves data about current user                             |

  ### Dashboard 

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
                     
  |post    |/trip             |create a new trip with the submitted form                   |

  ### Trip details

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  
  |post     |/trip/:tripid/itinerary    |add button allows to add new city to the itinerary and also makes a save on the destinations db
  |
  |post     |/trip/:tripid/reservations  |add trip to the reservation                         |
  |post     |/trip/:tripid/invite            |add users to trip                         
  |
  |get      |/trip/:tripid/destinations      |user can see explore destinations view with added cities 
  |
  |get      |/trip/:tripid/destinations/experiences |see things to do for that destiantion        |
  |post     |/trip/:tripid/destinations/experiences |add experiences to the itinerary 
  |
 
 ------------------------------------------------------------------------------
# Models

## User

```javascript
User = {
  name: String,  
  email: String, 
  password: String,
  }
```

## Reservations

```javascript
Reservation = {
  Category: String, 
  Date: Date,
  BookingLink: 'url', 
  Owner : User._id
}
```

## Experiences

```javascript
ThingsToDo={
  Destination : Destination._id,
  Location: Coordinates,
  Image : 'url',
  Description: String
}
```

## Destinations 

```javascript
City={
  Name: String,
  Image: String,
  Location: Coordinates
}
```

## Itinerary 

```javascript
Itinerary={
  Dates: {},
  Trip: trip._id,
  Destination: destination._id ,
  Experiences: experiences._id
}
```


## Trip 

```javascript
Trip = {
  Name: String,
  StartDate: Date,
  EndDate: Date,
  Users: Array
}
```




  
