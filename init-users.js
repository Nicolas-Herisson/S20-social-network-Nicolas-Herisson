db.createCollection('users');
db.users.insertOne({
    username: "user1",
    email: "user1@example.com",
    password: "password1",
});

db.users.insertOne({
    username: "user2",
    email: "user2@example.com",
    password: "password2"
});
