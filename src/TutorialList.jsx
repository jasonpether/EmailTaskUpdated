import { faker } from '@faker-js/faker';

const TutorialList =[
    {
        "key" : 0,
        "imageSrc" : faker.image.url({height: 200, width: 300}),
        "title" : faker.person.zodiacSign(),
        "desc" : faker.lorem.paragraph(),
        "rating" : faker.number.int({ min: 1, max: 5 }),
        "author" : faker.person.fullName()  
    },
    {
        "key" : 1,
        "imageSrc" : faker.image.url({height: 200, width: 300}),
        "title" : faker.person.zodiacSign(),
        "desc" : faker.lorem.paragraph(),
        "rating" : faker.number.int({ min: 1, max: 5 }),
        "author" : faker.person.fullName()  
    },
    {
        "key" : 2,
        "imageSrc" : faker.image.url({height: 200, width: 300}),
        "title" : faker.person.zodiacSign(),
        "desc" : faker.lorem.paragraph(),
        "rating" : faker.number.int({ min: 1, max: 5 }),
        "author" : faker.person.fullName()  
    },
]

export default TutorialList