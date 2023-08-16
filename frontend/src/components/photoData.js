const topic1Images = [
  {
    id: 21,
    urls: {
      full: 'http://localhost:8001/images/nature-1-full.jpg',
      regular: 'http://localhost:8001/images/nature-1-regular.jpg',
    },
    user: {
      username: 'jdoe',
      name: 'John Doe',
      profile: 'http://localhost:8001/images/profile-1.jpg',
    },
    location: {
      city: 'Toronto',
      country: 'Canada',
    },
    similar_photos: [
      {
        id: 22,
        urls: {
          full: 'http://localhost:8001/images/nature-2-full.jpg',
          regular: 'http://localhost:8001/images/nature-2-regular.jpg',
        },
        user: {
          username: 'awond',
          name: 'Alice Wonderland',
          profile: 'http://localhost:8001/images/profile-2.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        id: 23,
        urls: {
          full: 'http://localhost:8001/images/nature-3-full.jpg',
          regular: 'http://localhost:8001/images/nature-3-regular.jpg',
        },
        user: {
          username: 'sitad',
          name: 'Sita Dennis',
          profile: 'http://localhost:8001/images/profile-3.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      {
        id: 24,
        urls: {
          full: 'http://localhost:8001/images/nature-4-full.jpg',
          regular: 'http://localhost:8001/images/nature-4-regular.jpg',
        },
        user: {
          username: 'matte',
          name: 'Sasha Mateo',
          profile: 'http://localhost:8001/images/profile-4.jpg',
        },
        location: {
          city: 'Victoria',
          country: 'Canada',
        },
      },
      {
        id: 25,
        urls: {
          full: 'http://localhost:8001/images/nature-5-full.jpg',
          regular: 'http://localhost:8001/images/nature-5-regular.jpg',
        },
        user: {
          username: 'anita',
          name: 'Anita Austi',
          profile: 'http://localhost:8001/images/profile-5.jpg',
        },
        location: {
          city: 'Ottawa',
          country: 'Canada',
        },
      },
      {
        id: 26,
        urls: {
          full: 'http://localhost:8001/images/nature-6-full.jpg',
          regular: 'http://localhost:8001/images/nature-6-regular.jpg',
        },
        user: {
          username: 'lsouza',
          name: 'Lukas Souza',
          profile: 'http://localhost:8001/images/profile-6.jpg',
        },
        location: {
          city: 'Montreal',
          country: 'Canada',
        },
      },
      {
        id: 27,
        urls: {
          full: 'http://localhost:8001/images/nature-7-full.jpg',
          regular: 'http://localhost:8001/images/nature-7-regular.jpg',
        },
        user: {
          username: 'josea',
          name: 'Jose Alejandro',
          profile: 'http://localhost:8001/images/profile-7.jpg',
        },
        location: {
          city: 'Toronto',
          country: 'Canada',
        },
      },
      {
        id: 28,
        urls: {
          full: 'http://localhost:8001/images/nature-8-full.jpg',
          regular: 'http://localhost:8001/images/nature-8-regular.jpg',
        },
        user: {
          username: 'jdwayne',
          name: 'Dwayne Jacob',
          profile: 'http://localhost:8001/images/profile-8.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        id: 29,
        urls: {
          full: 'http://localhost:8001/images/nature-9-full.jpg',
          regular: 'http://localhost:8001/images/nature-9-regular.jpg',
        },
        user: {
          username: 'saeng',
          name: 'Allison Saeng',
          profile: 'http://localhost:8001/images/profile-9.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      // ... (add more similar_photos data as needed)
    ],
  },
  // ... (add more main nature photos as needed)
];

const topic2Images = [
  {
    id: 32,
    urls: {
      full: 'http://localhost:8001/images/travel-2-full.jpg',
      regular: 'http://localhost:8001/images/travel-2-regular.jpg',
    },
    user: {
      username: 'awond',
      name: 'Alice Wonderland',
      profile: 'http://localhost:8001/images/profile-2.jpg',
    },
    location: {
      city: 'Vancouver',
      country: 'Canada',
    },
    similar_photos: [
      {
        id: 31,
        urls: {
          full: 'http://localhost:8001/images/travel-1-full.jpg',
          regular: 'http://localhost:8001/images/travel-1-regular.jpg',
        },
        user: {
          username: 'jdoe',
          name: 'John Doe',
          profile: 'http://localhost:8001/images/profile-1.jpg',
        },
        location: {
          city: 'Toronto',
          country: 'Canada',
        },
      },
      {
        id: 33,
        urls: {
          full: 'http://localhost:8001/images/travel-3-full.jpg',
          regular: 'http://localhost:8001/images/travel-3-regular.jpg',
        },
        user: {
          username: 'sitad',
          name: 'Sita Dennis',
          profile: 'http://localhost:8001/images/profile-3.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      {
        id: 34,
        urls: {
          full: 'http://localhost:8001/images/travel-4-full.jpg',
          regular: 'http://localhost:8001/images/travel-4-regular.jpg',
        },
        user: {
          username: 'matte',
          name: 'Sasha Mateo',
          profile: 'http://localhost:8001/images/profile-4.jpg',
        },
        location: {
          city: 'Victoria',
          country: 'Canada',
        },
      },
      {
        id: 35,
        urls: {
          full: 'http://localhost:8001/images/travel-5-full.jpg',
          regular: 'http://localhost:8001/images/travel-5-regular.jpg',
        },
        user: {
          username: 'anita',
          name: 'Anita Austi',
          profile: 'http://localhost:8001/images/profile-5.jpg',
        },
        location: {
          city: 'Ottawa',
          country: 'Canada',
        },
      },
      {
        id: 36,
        urls: {
          full: 'http://localhost:8001/images/travel-6-full.jpg',
          regular: 'http://localhost:8001/images/travel-6-regular.jpg',
        },
        user: {
          username: 'lsouza',
          name: 'Lukas Souza',
          profile: 'http://localhost:8001/images/profile-6.jpg',
        },
        location: {
          city: 'Montreal',
          country: 'Canada',
        },
      },
      {
        id: 37,
        urls: {
          full: 'http://localhost:8001/images/travel-7-full.jpg',
          regular: 'http://localhost:8001/images/travel-7-regular.jpg',
        },
        user: {
          username: 'josea',
          name: 'Jose Alejandro',
          profile: 'http://localhost:8001/images/profile-7.jpg',
        },
        location: {
          city: 'Toronto',
          country: 'Canada',
        },
      },
      {
        id: 38,
        urls: {
          full: 'http://localhost:8001/images/travel-8-full.jpg',
          regular: 'http://localhost:8001/images/travel-8-regular.jpg',
        },
        user: {
          username: 'jdwayne',
          name: 'Dwayne Jacob',
          profile: 'http://localhost:8001/images/profile-8.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      // ... (add more similar_photos data as needed)
    ],
  },
  // ... (add more main travel photos as needed)
];

const topic3Images = [
  {
    id: 11,
    urls: {
      full: 'http://localhost:8001/images/people-1-full.jpg',
      regular: 'http://localhost:8001/images/people-1-regular.jpg',
    },
    user: {
      username: 'jdoe',
      name: 'John Doe',
      profile: 'http://localhost:8001/images/profile-1.jpg',
    },
    location: {
      city: 'Toronto',
      country: 'Canada',
    },
    similar_photos: [
      {
        id: 1,
        urls: {
          full: 'http://localhost:8001/images/Image-1-Full.jpeg',
          regular: 'http://localhost:8001/images/Image-1-Regular.jpeg',
        },
        user: {
          username: 'jdoe',
          name: 'John Doe',
          profile: 'http://localhost:8001/images/profile-1.jpg',
        },
        location: {
          city: 'Montreal',
          country: 'Canada',
        },
      },
      {
        id: 12,
        urls: {
          full: 'http://localhost:8001/images/people-2-full.jpg',
          regular: 'http://localhost:8001/images/people-2-regular.jpg',
        },
        user: {
          username: 'awond',
          name: 'Alice Wonderland',
          profile: 'http://localhost:8001/images/profile-2.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        id: 13,
        urls: {
          full: 'http://localhost:8001/images/people-3-full.jpg',
          regular: 'http://localhost:8001/images/people-3-regular.jpg',
        },
        user: {
          username: 'sitad',
          name: 'Sita Dennis',
          profile: 'http://localhost:8001/images/profile-3.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      {
        id: 14,
        urls: {
          full: 'http://localhost:8001/images/people-4-full.jpg',
          regular: 'http://localhost:8001/images/people-4-regular.jpg',
        },
        user: {
          username: 'matte',
          name: 'Sasha Mateo',
          profile: 'http://localhost:8001/images/profile-4.jpg',
        },
        location: {
          city: 'Victoria',
          country: 'Canada',
        },
      },
      {
        id: 15,
        urls: {
          full: 'http://localhost:8001/images/people-5-full.jpg',
          regular: 'http://localhost:8001/images/people-5-regular.jpg',
        },
        user: {
          username: 'anita',
          name: 'Anita Austi',
          profile: 'http://localhost:8001/images/profile-5.jpg',
        },
        location: {
          city: 'Ottawa',
          country: 'Canada',
        },
      },
      {
        id: 16,
        urls: {
          full: 'http://localhost:8001/images/people-6-full.jpg',
          regular: 'http://localhost:8001/images/people-6-regular.jpg',
        },
        user: {
          username: 'lsouza',
          name: 'Lukas Souza',
          profile: 'http://localhost:8001/images/profile-6.jpg',
        },
        location: {
          city: 'Montreal',
          country: 'Canada',
        },
      },
      {
        id: 17,
        urls: {
          full: 'http://localhost:8001/images/people-7-full.jpg',
          regular: 'http://localhost:8001/images/people-7-regular.jpg',
        },
        user: {
          username: 'josea',
          name: 'Jose Alejandro',
          profile: 'http://localhost:8001/images/profile-7.jpg',
        },
        location: {
          city: 'Toronto',
          country: 'Canada',
        },
      },
      {
        id: 18,
        urls: {
          full: 'http://localhost:8001/images/people-8-full.jpg',
          regular: 'http://localhost:8001/images/people-8-regular.jpg',
        },
        user: {
          username: 'jdwayne',
          name: 'Dwayne Jacob',
          profile: 'http://localhost:8001/images/profile-8.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        id: 19,
        urls: {
          full: 'http://localhost:8001/images/people-9-full.jpg',
          regular: 'http://localhost:8001/images/people-9-regular.jpg',
        },
        user: {
          username: 'saeng',
          name: 'Allison Saeng',
          profile: 'http://localhost:8001/images/profile-9.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      // ... (add more similar_photos data as needed)
    ],
  },
  // ... (add more main people photos as needed)
];

const topic4Images = [
  {
    id: 51,
    urls: {
      full: 'http://localhost:8001/images/fashion-1-full.jpg',
      regular: 'http://localhost:8001/images/fashion-1-regular.jpg',
    },
    user: {
      username: 'jdoe',
      name: 'John Doe',
      profile: 'http://localhost:8001/images/profile-1.jpg',
    },
    location: {
      city: 'Toronto',
      country: 'Canada',
    },
    similar_photos: [
      {
        id: 52,
        urls: {
          full: 'http://localhost:8001/images/fashion-2-full.jpg',
          regular: 'http://localhost:8001/images/fashion-2-regular.jpg',
        },
        user: {
          username: 'awond',
          name: 'Alice Wonderland',
          profile: 'http://localhost:8001/images/profile-2.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        id: 53,
        urls: {
          full: 'http://localhost:8001/images/fashion-3-full.jpg',
          regular: 'http://localhost:8001/images/fashion-3-regular.jpg',
        },
        user: {
          username: 'sitad',
          name: 'Sita Dennis',
          profile: 'http://localhost:8001/images/profile-3.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      {
        id: 54,
        urls: {
          full: 'http://localhost:8001/images/fashion-4-full.jpg',
          regular: 'http://localhost:8001/images/fashion-4-regular.jpg',
        },
        user: {
          username: 'matte',
          name: 'Sasha Mateo',
          profile: 'http://localhost:8001/images/profile-4.jpg',
        },
        location: {
          city: 'Victoria',
          country: 'Canada',
        },
      },
      {
        id: 55,
        urls: {
          full: 'http://localhost:8001/images/fashion-5-full.jpg',
          regular: 'http://localhost:8001/images/fashion-5-regular.jpg',
        },
        user: {
          username: 'anita',
          name: 'Anita Austi',
          profile: 'http://localhost:8001/images/profile-5.jpg',
        },
        location: {
          city: 'Ottawa',
          country: 'Canada',
        },
      },
      {
        id: 56,
        urls: {
          full: 'http://localhost:8001/images/fashion-6-full.jpg',
          regular: 'http://localhost:8001/images/fashion-6-regular.jpg',
        },
        user: {
          username: 'lsouza',
          name: 'Lukas Souza',
          profile: 'http://localhost:8001/images/profile-6.jpg',
        },
        location: {
          city: 'Montreal',
          country: 'Canada',
        },
      },
      {
        id: 57,
        urls: {
          full: 'http://localhost:8001/images/fashion-7-full.jpg',
          regular: 'http://localhost:8001/images/fashion-7-regular.jpg',
        },
        user: {
          username: 'josea',
          name: 'Jose Alejandro',
          profile: 'http://localhost:8001/images/profile-7.jpg',
        },
        location: {
          city: 'Toronto',
          country: 'Canada',
        },
      },
      // ... (add more similar_photos data as needed)
    ],
  },
  // ... (add more main fashion photos as needed)
];

const topic5Images = [
  {
    id: 41,
    urls: {
      full: 'http://localhost:8001/images/animals-1-full.jpg',
      regular: 'http://localhost:8001/images/animals-1-regular.jpg',
    },
    user: {
      username: 'jdoe',
      name: 'John Doe',
      profile: 'http://localhost:8001/images/profile-1.jpg',
    },
    location: {
      city: 'Toronto',
      country: 'Canada',
    },
    similar_photos: [
      {
        id: 42,
        urls: {
          full: 'http://localhost:8001/images/animals-2-full.jpg',
          regular: 'http://localhost:8001/images/animals-2-regular.jpg',
        },
        user: {
          username: 'awond',
          name: 'Alice Wonderland',
          profile: 'http://localhost:8001/images/profile-2.jpg',
        },
        location: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        id: 43,
        urls: {
          full: 'http://localhost:8001/images/animals-3-full.jpg',
          regular: 'http://localhost:8001/images/animals-3-regular.jpg',
        },
        user: {
          username: 'sitad',
          name: 'Sita Dennis',
          profile: 'http://localhost:8001/images/profile-3.jpg',
        },
        location: {
          city: 'Calgary',
          country: 'Canada',
        },
      },
      {
        id: 44,
        urls: {
          full: 'http://localhost:8001/images/animals-4-full.jpg',
          regular: 'http://localhost:8001/images/animals-4-regular.jpg',
        },
        user: {
          username: 'matte',
          name: 'Sasha Mateo',
          profile: 'http://localhost:8001/images/profile-4.jpg',
        },
        location: {
          city: 'Victoria',
          country: 'Canada',
        },
      },
      {
        id: 45,
        urls: {
          full: 'http://localhost:8001/images/animals-5-full.jpg',
          regular: 'http://localhost:8001/images/animals-5-regular.jpg',
        },
        user: {
          username: 'anita',
          name: 'Anita Austi',
          profile: 'http://localhost:8001/images/profile-5.jpg',
        },
        location: {
          city: 'Ottawa',
          country: 'Canada',
        },
      },
      {
        id: 46,
        urls: {
          full: 'http://localhost:8001/images/animals-6-full.jpg',
          regular: 'http://localhost:8001/images/animals-6-regular.jpg',
        },
        user: {
          username: 'lsouza',
          name: 'Lukas Souza',
          profile: 'http://localhost:8001/images/profile-6.jpg',
        },
        location: {
          city: 'Montreal',
          country: 'Canada',
        },
      },
      {
        id: 47,
        urls: {
          full: 'http://localhost:8001/images/animals-7-full.jpg',
          regular: 'http://localhost:8001/images/animals-7-regular.jpg',
        },
        user: {
          username: 'josea',
          name: 'Jose Alejandro',
          profile: 'http://localhost:8001/images/profile-7.jpg',
        },
        location: {
          city: 'Toronto',
          country: 'Canada',
        },
      },
      // ... (add more similar_photos data as needed)
    ],
  },
  // ... (add more main animals photos as needed)
];



export { topic1Images, topic2Images, topic3Images, topic4Images, topic5Images };

