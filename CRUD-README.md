# CRUD API

## CREATE 

- Route: app.post('/api/restaurants/:id/photos')
- restaurant info will come through the body of the request
- id will be taken from the url
- db.saveRestaurant function will be used to save to the database

## READ

- Route: app.get('/api/restaurants/:id/photos')
- id will be taken from the url
- db.find function will be used to get information for that restaurant

## UPDATE

- Route: app.put('/api/restaurants/:id/photos')
- restaurant info will come through the body of the request
- id will be taken from the url
- db.updateRestaurant function will be used to update restaurant in the database

## DELETE

- Route: app.delete('/api/restaurants/:id/photos')
- restaurant info will come through the body of the request
- id will be taken from the url
- db.deleteRestaurant function will be used to remove restaurant from the database
