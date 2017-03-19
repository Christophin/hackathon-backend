https://sleepy-shore-85821.herokuapp.com/

POST to /users to create a user. username, email, and password are
required. name, profilePic, backgroundPic and profileTitle are
optional

POST to /login to login with a registered user. required are email and password.

POST to /photos to post a photo to the server. login is required.

POST to /photos/id/comment to post a comment on a photo. login is required.

GET to /photos to pull all of the photos from all of the users in the database.

GET to /photos/:id to pull an individual photo in the database.

GET to /users to pull all usernames and profiles.

GET to /users/:id to pull an individual user.
