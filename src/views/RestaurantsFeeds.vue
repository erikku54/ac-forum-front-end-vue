<template>
    <div class="container py-5">
        <NavTab/>
        <h1 class="mt-5">最新動態</h1>

        <hr>
        <div class="row">
            <div class="col-md-6">
                <h3>最新餐廳</h3>
                <!-- 最新餐廳情報 -->
                <NewestRestaurants :restaurants="restaurants"/>
            </div>
            <div class="col-md-6">
                <h3>最新評論</h3>
                <!-- 最新評論 -->
                <NewestComments :comments="comments"/>
            </div>
        </div>

    </div>
</template>

<script>
    import NavTab from './../components/NavTabs.vue'
    import NewestRestaurants from '@/components/NewestRestaurants.vue';
    import NewestComments from '@/components/NewestComments.vue';

    const dummyData={
        "restaurants": [
            {
                "id": 1,
                "name": "Mortimer Ritchie",
                "tel": "1-005-555-4369 x4556",
                "address": "91563 Jarod Parks",
                "opening_hours": "08:00",
                "description": "Vel et debitis aut praesentium corrupti molestiae et aut voluptate. Sit eos atque tenetur ut eaque id aliquam sapiente enim. Rem corrupti a hic error. Tenetur provident optio doloremque nemo quia.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.808903318046994",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 2,
                "name": "Mittie Bayer",
                "tel": "427-399-1229 x5860",
                "address": "7323 Lubowitz Ramp",
                "opening_hours": "08:00",
                "description": "nostrum eveniet facilis",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.86843117277621",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 5,
                "Category": {
                    "id": 5,
                    "name": "素食料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 3,
                "name": "Anjali Green PhD",
                "tel": "412.598.4514",
                "address": "539 Orn Ville",
                "opening_hours": "08:00",
                "description": "omnis",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.131675859597365",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 4,
                "name": "Ottilie Jaskolski",
                "tel": "600-156-1519 x95523",
                "address": "438 Hackett Isle",
                "opening_hours": "08:00",
                "description": "tempore",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.402205809673454",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 5,
                "Category": {
                    "id": 5,
                    "name": "素食料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 5,
                "name": "Josiane Kassulke",
                "tel": "1-276-089-1011",
                "address": "971 Fernando Wall",
                "opening_hours": "08:00",
                "description": "Cum tempora nisi enim.\nVoluptas asperiores minus numquam et ipsa ut.\nMaxime et et temporibus id aut repellat nisi ut.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.546618507549802",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 6,
                "name": "Jermaine Willms",
                "tel": "1-737-367-5819 x64386",
                "address": "027 Klein Shores",
                "opening_hours": "08:00",
                "description": "Laudantium maiores sunt aut rerum exercitationem.\nError voluptatem non et dignissimos esse architecto molestiae beatae.\nOdio ab qui consequatur commodi vel ut.\nAmet modi totam.\nNulla et id expedita iusto quisquam hic.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.84923015579544",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 5,
                "Category": {
                    "id": 5,
                    "name": "素食料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 7,
                "name": "Daniella Feest",
                "tel": "111.324.5078 x4792",
                "address": "52963 Botsford Points",
                "opening_hours": "08:00",
                "description": "nam",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.54855615618642",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 1,
                "Category": {
                    "id": 1,
                    "name": "中式料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 8,
                "name": "Jerald Leannon",
                "tel": "1-527-120-5209 x89817",
                "address": "60390 Rau Loop",
                "opening_hours": "08:00",
                "description": "Vitae tempora est voluptas unde. Et quasi maxime molestiae alias natus amet recusandae. Sint sequi non. Nostrum tempore dolore quae quia accusamus et. Et eum illum aut.\n \rTemporibus sequi eum ea blanditiis sit commodi aut ut. Rerum molestiae dignissimos aperiam id qui. Inventore assumenda laboriosam adipisci praesentium rerum quos at at eveniet. Atque ut saepe harum neque voluptatum ratione asperiores consequatur sed. Sit et accusamus est expedita quis dolorem sint neque.\n \rDicta beatae nisi qui ut. Quo perferendis eligendi. Consequuntur est est velit nihil nobis. Animi nam dolor eaque cumque eligendi hic eveniet. Ex voluptas impedit fugiat voluptas perspiciatis numquam voluptas esse. Et quam quae qui assumenda repudiandae.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.247189166213537",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 2,
                "Category": {
                    "id": 2,
                    "name": "日本料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 9,
                "name": "Hailie O'Kon",
                "tel": "1-963-908-5950 x318",
                "address": "2840 Nils Plaza",
                "opening_hours": "08:00",
                "description": "Dicta cupiditate sequi voluptas. Sit quis quia aut alias. Qui ut aut voluptatum. Soluta et ut sint. Aliquam qui quo natus quasi.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.252167939908311",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 2,
                "Category": {
                    "id": 2,
                    "name": "日本料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            },
            {
                "id": 10,
                "name": "Johathan Jast",
                "tel": "199.855.4141 x012",
                "address": "967 Alexis Shore",
                "opening_hours": "08:00",
                "description": "Minus omnis ut incidunt laboriosam accusantium maiores aliquid eveniet. A rerum dolorem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.228681700827703",
                "viewCounts": 0,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                }
            }
        ],
        "comments": [
            {
                "id": 1,
                "text": "Officiis debitis voluptate et possimus repudiandae aut quia.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$gdEyH1zSMVlsEoHhKIJ7NuNdNvHxxgY40PpbBosigX8CXwXIFkjBS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 1,
                    "name": "Mortimer Ritchie",
                    "tel": "1-005-555-4369 x4556",
                    "address": "91563 Jarod Parks",
                    "opening_hours": "08:00",
                    "description": "Vel et debitis aut praesentium corrupti molestiae et aut voluptate. Sit eos atque tenetur ut eaque id aliquam sapiente enim. Rem corrupti a hic error. Tenetur provident optio doloremque nemo quia.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.808903318046994",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 2,
                "text": "Provident qui consequuntur.",
                "UserId": 2,
                "RestaurantId": 2,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$TYzViRnXO4XLE1xLLlen4.Fkw3oOgh6ZI6mvMw13vFwvWbXaaL13W",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 2,
                    "name": "Mittie Bayer",
                    "tel": "427-399-1229 x5860",
                    "address": "7323 Lubowitz Ramp",
                    "opening_hours": "08:00",
                    "description": "nostrum eveniet facilis",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.86843117277621",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 3,
                "text": "Dolorum officia repudiandae non nemo itaque atque blanditiis aut nihil.",
                "UserId": 1,
                "RestaurantId": 3,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$gdEyH1zSMVlsEoHhKIJ7NuNdNvHxxgY40PpbBosigX8CXwXIFkjBS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 3,
                    "name": "Anjali Green PhD",
                    "tel": "412.598.4514",
                    "address": "539 Orn Ville",
                    "opening_hours": "08:00",
                    "description": "omnis",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.131675859597365",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 4,
                "text": "Ex ipsum qui eveniet voluptatibus animi et ullam libero quod.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$gdEyH1zSMVlsEoHhKIJ7NuNdNvHxxgY40PpbBosigX8CXwXIFkjBS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 4,
                    "name": "Ottilie Jaskolski",
                    "tel": "600-156-1519 x95523",
                    "address": "438 Hackett Isle",
                    "opening_hours": "08:00",
                    "description": "tempore",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.402205809673454",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 5,
                "text": "Illo odit occaecati doloremque sequi dolores sunt non.",
                "UserId": 3,
                "RestaurantId": 5,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$6UGCJdmg6F6MCxlGAIS/suHw9wBbz/meqc4srq18SjcOUtuLKgpJm",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 5,
                    "name": "Josiane Kassulke",
                    "tel": "1-276-089-1011",
                    "address": "971 Fernando Wall",
                    "opening_hours": "08:00",
                    "description": "Cum tempora nisi enim.\nVoluptas asperiores minus numquam et ipsa ut.\nMaxime et et temporibus id aut repellat nisi ut.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.546618507549802",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 6,
                "text": "Ea repellendus et perspiciatis consequatur natus facere.",
                "UserId": 2,
                "RestaurantId": 6,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$TYzViRnXO4XLE1xLLlen4.Fkw3oOgh6ZI6mvMw13vFwvWbXaaL13W",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 6,
                    "name": "Jermaine Willms",
                    "tel": "1-737-367-5819 x64386",
                    "address": "027 Klein Shores",
                    "opening_hours": "08:00",
                    "description": "Laudantium maiores sunt aut rerum exercitationem.\nError voluptatem non et dignissimos esse architecto molestiae beatae.\nOdio ab qui consequatur commodi vel ut.\nAmet modi totam.\nNulla et id expedita iusto quisquam hic.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.84923015579544",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 7,
                "text": "Aut qui officia ullam enim.",
                "UserId": 3,
                "RestaurantId": 7,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$6UGCJdmg6F6MCxlGAIS/suHw9wBbz/meqc4srq18SjcOUtuLKgpJm",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 7,
                    "name": "Daniella Feest",
                    "tel": "111.324.5078 x4792",
                    "address": "52963 Botsford Points",
                    "opening_hours": "08:00",
                    "description": "nam",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.54855615618642",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 8,
                "text": "Quia et doloremque est consequatur quis ducimus et.",
                "UserId": 3,
                "RestaurantId": 8,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$6UGCJdmg6F6MCxlGAIS/suHw9wBbz/meqc4srq18SjcOUtuLKgpJm",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 8,
                    "name": "Jerald Leannon",
                    "tel": "1-527-120-5209 x89817",
                    "address": "60390 Rau Loop",
                    "opening_hours": "08:00",
                    "description": "Vitae tempora est voluptas unde. Et quasi maxime molestiae alias natus amet recusandae. Sint sequi non. Nostrum tempore dolore quae quia accusamus et. Et eum illum aut.\n \rTemporibus sequi eum ea blanditiis sit commodi aut ut. Rerum molestiae dignissimos aperiam id qui. Inventore assumenda laboriosam adipisci praesentium rerum quos at at eveniet. Atque ut saepe harum neque voluptatum ratione asperiores consequatur sed. Sit et accusamus est expedita quis dolorem sint neque.\n \rDicta beatae nisi qui ut. Quo perferendis eligendi. Consequuntur est est velit nihil nobis. Animi nam dolor eaque cumque eligendi hic eveniet. Ex voluptas impedit fugiat voluptas perspiciatis numquam voluptas esse. Et quam quae qui assumenda repudiandae.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.247189166213537",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 9,
                "text": "Culpa odio earum occaecati ut optio.",
                "UserId": 2,
                "RestaurantId": 9,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$TYzViRnXO4XLE1xLLlen4.Fkw3oOgh6ZI6mvMw13vFwvWbXaaL13W",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 9,
                    "name": "Hailie O'Kon",
                    "tel": "1-963-908-5950 x318",
                    "address": "2840 Nils Plaza",
                    "opening_hours": "08:00",
                    "description": "Dicta cupiditate sequi voluptas. Sit quis quia aut alias. Qui ut aut voluptatum. Soluta et ut sint. Aliquam qui quo natus quasi.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.252167939908311",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 10,
                "text": "Laborum suscipit consequuntur qui esse facere sunt.",
                "UserId": 2,
                "RestaurantId": 10,
                "createdAt": "2023-02-18T09:17:41.000Z",
                "updatedAt": "2023-02-18T09:17:41.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$TYzViRnXO4XLE1xLLlen4.Fkw3oOgh6ZI6mvMw13vFwvWbXaaL13W",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z"
                },
                "Restaurant": {
                    "id": 10,
                    "name": "Johathan Jast",
                    "tel": "199.855.4141 x012",
                    "address": "967 Alexis Shore",
                    "opening_hours": "08:00",
                    "description": "Minus omnis ut incidunt laboriosam accusantium maiores aliquid eveniet. A rerum dolorem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.228681700827703",
                    "viewCounts": 0,
                    "createdAt": "2023-02-18T09:17:41.000Z",
                    "updatedAt": "2023-02-18T09:17:41.000Z",
                    "CategoryId": 3
                }
            }
        ]
    }

    export default{

        components: {
            NavTab,
            NewestRestaurants,
            NewestComments
        },
        data(){
            return {
                restaurants: [],
                comments: [],
            }
        },
        created(){
            this.fetchFeeds();
        },
        methods: {
            fetchFeeds(){
                this.restaurants=dummyData.restaurants;
                this.comments=dummyData.comments;
            }
        },
    }
</script>