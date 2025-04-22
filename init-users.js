// role1 -> admin
// role2 -> user
// role3 -> intern
// passwords -> password+userNumber (user1 : password1, user2 : password2, ...)

db.createCollection('users');
db.users.insertOne({
    _id: ObjectId("680805bb45544dfce7d861e0"),
    username: "user1",
    email: "user1@example.com",
    password: "87a5277e32a2457ae3df7c746648bc24:c3d2fe70257e8432edc3fe011191e5bde731fed320c552c46411c7a4d9785569e0000b15bfd74f1fa426e837e5c8bf77adc41e21b5068860d8ed88309db38933",
    description: "Description de user1",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    role_id: 1
});

db.users.insertOne({
    _id: ObjectId("680805bb45544dfce7d861e1"),
    username: "user2",
    email: "user2@example.com",
    password: "b5df93fd0d7579dd927beddd9c8c501b:1e54fcfdef2f3603b01e0f88ff75d6c50dbc0ad5f4b95b38f516472ad3fd0f5393223154bb38db908ef0da3940f74dc8d0b7aa3c4543ab94058ced9ae2fe407b",
    description: "Description de user2",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    role_id: 2
});

db.users.insertOne({
    _id: ObjectId("680805bb45544dfce7d861e2"),
    username: "user3",
    email: "user3@example.com",
    password: "8259a433b7711de2aedf77adce5be1cc:557128f38fb50e96be2e15e11925237e869b4222194660ec8285394c5f0b3cf0b020773bd0367c4d59935c72f4fd8498db6174d5e357dbaceffcf735bfb64bd9",
    description: "Description de user3",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    role_id: 3
});

db.users.insertOne({
    _id: ObjectId("680805bb45544dfce7d861e3"),
    username: "user4",
    email: "user4@example.com",
    password: "8eb38790abe402cbcda2ebe2cc583b08:0d8be8b792be9caf37f98b2363229e445b14c9657f4169555cd470dd1882af5d4115afa066051052aeb3a75c62b1970a5bbee1648e297cc07b082f7576af5c0e",
    description: "Description de user4",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    role_id: 1
});