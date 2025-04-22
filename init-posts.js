db.createCollection('posts');

db.posts.insertMany([
    {
        title: "Suggestions de films après une longue journée",
        author: ObjectId("680805bb45544dfce7d861e0"),
        content: "Une journée bien remplie, mais quel bonheur de terminer avec un bon film. Vous avez des suggestions ?",
        created_at: new Date(Date.now() - 9 * 60 * 60 * 1000), // Il y a 9 heures
        updated_at: new Date(Date.now() - 9 * 60 * 60 * 1000)
    },
    {
        title: "Recette de cookies maison",
        author: ObjectId("680805bb45544dfce7d861e0"),
        content: "Quelqu’un a une bonne recette de cookies maison ? 🍪",
        created_at: new Date(Date.now() - 30 * 60 * 1000), // Il y a 30 minutes
        updated_at: new Date(Date.now() - 30 * 60 * 1000)
    },
    {
        title: "Matchs de foot ce soir",
        author: ObjectId("680805bb45544dfce7d861e0"),
        content: "Les matchs de foot ce soir vont être intenses ! Qui est votre équipe favorite ? ⚽",
        created_at: new Date(Date.now() - 1 * 60 * 60 * 1000), // Il y a 1 heure
        updated_at: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
        title: "Une pensée positive",
        author: ObjectId("680805bb45544dfce7d861e1"),
        content: "Quel beau jour pour partager mes pensées. La vie est belle, profitez-en !",
        created_at: new Date(Date.now() - 4 * 60 * 60 * 1000), // Il y a 4 heures
        updated_at: new Date(Date.now() - 4 * 60 * 60 * 1000)
    },
    {
        title: "Le soleil brille, profitons-en",
        author: ObjectId("680805bb45544dfce7d861e1"),
        content: "Le soleil brille, mais pas assez longtemps. Faut en profiter !",
        created_at: new Date(Date.now() - 6 * 60 * 60 * 1000), // Il y a 6 heures
        updated_at: new Date(Date.now() - 6 * 60 * 60 * 1000)
    },
    {
        title: "Des vacances en vue ?",
        author: ObjectId("680805bb45544dfce7d861e1"),
        content: "Besoin de vacances ! 🌴 Et vous, vous partez bientôt ?",
        created_at: new Date(Date.now() - 1 * 60 * 60 * 1000), // Il y a 1 heure
        updated_at: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
        title: "Les fleurs et la bonne humeur",
        author: ObjectId("680805bb45544dfce7d861e1"),
        content: "Les fleurs commencent à éclore et ça me met de bonne humeur 🌸",
        created_at: new Date(Date.now() - 6 * 60 * 60 * 1000), // Il y a 6 heures
        updated_at: new Date(Date.now() - 6 * 60 * 60 * 1000)
    },
    {
        title: "Chanson coup de cœur",
        author: ObjectId("680805bb45544dfce7d861e1"),
        content: "J'ai eu un coup de cœur pour une chanson aujourd'hui. À écouter absolument : 'Le vent nous portera'.",
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000), // Il y a 2 heures
        updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
        title: "Le moment préféré de la journée",
        author: ObjectId("680805bb45544dfce7d861e1"),
        content: "Le café du matin est toujours mon moment préféré de la journée ☕",
        created_at: new Date(Date.now() - 1 * 60 * 60 * 1000), // Il y a 1 heure
        updated_at: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
        title: "Livre recommandé",
        author: ObjectId("680805bb45544dfce7d861e2"),
        content: "Je viens de finir un livre incroyable. Si vous aimez les thrillers, 'La fille du train' est top !",
        created_at: new Date(Date.now() - 3 * 60 * 60 * 1000), // Il y a 3 heures
        updated_at: new Date(Date.now() - 3 * 60 * 60 * 1000)
    },
    {
        title: "Recette de curry de légumes",
        author: ObjectId("680805bb45544dfce7d861e2"),
        content: "J’ai essayé une nouvelle recette aujourd’hui : curry de légumes 🍛. Tellement bon !",
        created_at: new Date(Date.now() - 7 * 60 * 60 * 1000), // Il y a 7 heures
        updated_at: new Date(Date.now() - 7 * 60 * 60 * 1000)
    },
    {
        title: "Playlist du matin",
        author: ObjectId("680805bb45544dfce7d861e2"),
        content: "Rien de tel qu'une bonne playlist pour commencer la journée 🎶",
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000), // Il y a 2 heures
        updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
        title: "Podcasts historiques",
        author: ObjectId("680805bb45544dfce7d861e2"),
        content: "En ce moment, je suis à fond dans les podcasts sur l’histoire. Quelqu'un a des recommandations ?",
        created_at: new Date(Date.now() - 8 * 60 * 60 * 1000), // Il y a 8 heures
        updated_at: new Date(Date.now() - 8 * 60 * 60 * 1000)
    },
    {
        title: "Projets pour ce week-end",
        author: ObjectId("680805bb45544dfce7d861e2"),
        content: "Des projets pour ce week-end ? Pour moi, c’est vélo et détente. 🚴‍♂️",
        created_at: new Date(Date.now() - 4 * 60 * 60 * 1000), // Il y a 4 heures
        updated_at: new Date(Date.now() - 4 * 60 * 60 * 1000)
    },
    {
        title: "Inspiration de la nature",
        author: ObjectId("680805bb45544dfce7d861e3"),
        content: "La nature m'inspire tellement 🌿 Prenez le temps d'admirer les petites choses de la vie.",
        created_at: new Date(Date.now() - 5 * 60 * 60 * 1000), // Il y a 5 heures
        updated_at: new Date(Date.now() - 5 * 60 * 60 * 1000)
    },
    {
        title: "Calme du matin",
        author: ObjectId("680805bb45544dfce7d861e3"),
        content: "Se lever tôt pour profiter du calme du matin ☕",
        created_at: new Date(Date.now() - 3 * 60 * 60 * 1000), // Il y a 3 heures
        updated_at: new Date(Date.now() - 3 * 60 * 60 * 1000)
    },
    {
        title: "Yoga au bord de la mer",
        author: ObjectId("680805bb45544dfce7d861e3"),
        content: "Aujourd'hui, j'ai découvert un endroit super pour faire du yoga au bord de la mer 🧘‍♀️",
        created_at: new Date(Date.now() - 4 * 60 * 60 * 1000), // Il y a 4 heures
        updated_at: new Date(Date.now() - 4 * 60 * 60 * 1000)
    },
    {
        title: "Festival de musique ce week-end",
        author: ObjectId("680805bb45544dfce7d861e3"),
        content: "J'ai hâte d'aller à ce festival de musique ce week-end. 🎵 Qui y va ?",
        created_at: new Date(Date.now() - 10 * 60 * 60 * 1000), // Il y a 10 heures
        updated_at: new Date(Date.now() - 10 * 60 * 60 * 1000)
    },
    {
        title: "Film de comédie pour se détendre",
        author: ObjectId("680805bb45544dfce7d861e3"),
        content: "Après une longue semaine de travail, rien de tel qu'un bon film de comédie pour se détendre ! 🎬",
        created_at: new Date(Date.now() - 5 * 60 * 60 * 1000), // Il y a 5 heures
        updated_at: new Date(Date.now() - 5 * 60 * 60 * 1000)
    }
]);
