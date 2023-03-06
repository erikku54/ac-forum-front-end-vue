<template>
    <div class="container py-5">
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge bg-secondary mt-1 mb-3">
          {{ restaurant.Category.name }}
        </span>
      </div>
  
      <hr>
  
      <ul>
        <li>評論數： {{ restaurant.Comments.length }} </li>
        <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
      </ul>
  
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
    </div>
</template>

<script>

const dummyData = {
    "restaurant": {
        "id": 2,
        "name": "Yesenia Breitenberg",
        "tel": "(505) 383-4380",
        "address": "458 Rutherford Roads",
        "opening_hours": "08:00",
        "description": "rerum",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.50485005587787",
        "viewCounts": 0,
        "createdAt": "2023-03-02T13:43:59.000Z",
        "updatedAt": "2023-03-02T13:43:59.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2023-03-02T13:43:59.000Z",
            "updatedAt": "2023-03-02T13:43:59.000Z"
        },
        "Comments": [
            {
                "id": 2,
                "text": "Ipsam magnam soluta eligendi omnis quia dicta.",
                "UserId": 2,
                "RestaurantId": 2,
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
                "id": 52,
                "text": "Sequi eius omnis.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$RBj4w8mvC7JpdSjNMKtJz.yb/StLYs16BZWgCpEtQ1L5OcpWtbouS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                }
            },
            {
                "id": 102,
                "text": "Commodi in architecto laborum labore optio soluta ut.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$RBj4w8mvC7JpdSjNMKtJz.yb/StLYs16BZWgCpEtQ1L5OcpWtbouS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                }
            }
        ]
    }
}


export default {
    data () {
        return {
            restaurant: {}
        }
    },
    methods: {
        fetchData () {
            this.restaurant = dummyData.restaurant;
        }
    },
    created () {
        this.fetchData();
    }
}

</script>