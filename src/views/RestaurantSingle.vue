<template>
    <div class="container py-5">
      <h1>餐廳描述頁</h1>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initial-restaurant="restaurant"/>
      <hr>
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments 
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"/>
      <!-- 新增評論 CreateComment -->
      <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment"/>
    </div>
</template>

<script>
    import RestaurantDetail from '@/components/RestaurantDetail.vue'
    import RestaurantComments from '@/components/RestaurantComments.vue'
    import CreateComment from '@/components/CreateComment.vue'

    const dummyData = {
        "restaurant": {
            "id": 1,
            "name": "Devyn Nolan MD",
            "tel": "(283) 815-9713",
            "address": "0356 Cormier Mountain",
            "opening_hours": "08:00",
            "description": "In suscipit beatae laboriosam iste quia voluptates.\nDolor minus est.\nEst maxime voluptatem quaerat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.42400489643676",
            "viewCounts": 1,
            "createdAt": "2023-03-02T13:43:59.000Z",
            "updatedAt": "2023-03-04T13:17:55.044Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            "FavoritedUsers": [],
            "LikedUsers": [],
            "Comments": [
                {
                    "id": 101,
                    "text": "Ea at porro sed.",
                    "UserId": 2,
                    "RestaurantId": 1,
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z",
                    "User": {
                        "id": 2,
                        "name": "user1",
                        "email": "user1@example.com",
                        "password": "$2a$10$/zPWX2s4l6dzqGlB.EspIerSlvxX2urcBHh3vacCsDJ1F54gNIlKe",
                        "isAdmin": false,
                        "image": null,
                        "createdAt": "2023-03-02T13:43:59.000Z",
                        "updatedAt": "2023-03-02T13:43:59.000Z"
                    }
                },
                {
                    "id": 51,
                    "text": "Saepe alias voluptatum at facere commodi aut.",
                    "UserId": 3,
                    "RestaurantId": 1,
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z",
                    "User": {
                        "id": 3,
                        "name": "user2",
                        "email": "user2@example.com",
                        "password": "$2a$10$hYzdLfqx.fhhvK3NJ9Y1PeeUITXXchDJK3Gv5VSJpfn.53Ftk4u5C",
                        "isAdmin": false,
                        "image": null,
                        "createdAt": "2023-03-02T13:43:59.000Z",
                        "updatedAt": "2023-03-02T13:43:59.000Z"
                    }
                },
                {
                    "id": 1,
                    "text": "In odio iure.",
                    "UserId": 2,
                    "RestaurantId": 1,
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z",
                    "User": {
                        "id": 2,
                        "name": "user1",
                        "email": "user1@example.com",
                        "password": "$2a$10$/zPWX2s4l6dzqGlB.EspIerSlvxX2urcBHh3vacCsDJ1F54gNIlKe",
                        "isAdmin": false,
                        "image": null,
                        "createdAt": "2023-03-02T13:43:59.000Z",
                        "updatedAt": "2023-03-02T13:43:59.000Z"
                    }
                }
            ]
        },
        "isFavorited": false,
        "isLiked": false
    }

    const dummyUser = {
        currentUser: {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "image": null,
            "isAdmin": true
        }    
    }

    export default {
        components: {
            RestaurantDetail,
            RestaurantComments,
            CreateComment
        },
        data () {
            return {
                restaurant: {
                    id: -1,
                    name: '',
                    categoryName: '',
                    image: '',
                    openingHours: '',
                    tel: '',
                    address: '',
                    description: '',
                    isFavorited: false,
                    isLiked: false
                },
                restaurantComments: [],
                currentUser: dummyUser.currentUser
            }
        },
        created () {
            const restaurantId = this.$route.params.id;
            this.fetchRestaurant(restaurantId);
        },
        methods: {
            fetchRestaurant (restaurantId) {
                console.log('fetchRestaurant id: ', restaurantId);

                this.restaurant = {
                    id: dummyData.restaurant.id,
                    name: dummyData.restaurant.name,
                    categoryName: dummyData.restaurant.Category.name,
                    image: dummyData.restaurant.image,
                    openingHours: dummyData.restaurant.opening_hours,
                    tel: dummyData.restaurant.tel,
                    address: dummyData.restaurant.address,
                    description: dummyData.restaurant.description,
                    isFavorited: dummyData.isFavorited,
                    isLiked: dummyData.isLiked,
                };

                this.restaurantComments = dummyData.restaurant.Comments;
            },
            afterDeleteComment (commentId) {

                this.restaurantComments = this.restaurantComments.filter(
                    comment => comment.id != commentId
                );
            },
            afterCreateComment (payload) {
                const { commentId, restaurantId, text} = payload
                this.restaurantComments.push({
                    id: commentId,
                    text: text,
                    UserId: this.currentUser.id,
                    RestaurantId: restaurantId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    User: this.currentUser
                })

            }
        }
    }



</script>

