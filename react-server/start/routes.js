'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/session', 'SessionController.create')
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')