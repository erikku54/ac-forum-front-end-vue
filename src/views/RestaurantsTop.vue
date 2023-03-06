<template>
    <div class="container py-5">
      <NavTab />
      <h1 class="mt-5">
        人氣餐廳
      </h1>
  
      <hr>
      <div v-for="restaurant in topRestaurants" :key="restaurant.id"
        class="card mb-3"
        style="max-width: 540px;margin: auto;"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="#">
              <img
                class="card-img"
                :src="restaurant.image"
              >
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{restaurant.name}}
              </h5>
              <span class="badge bg-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
              <p class="card-text">
                {{restaurant.description}}
              </p>
              <router-link :to="{name: 'restaurant-dashboard', params: {id: restaurant.id}}"
                href="#"
                class="btn btn-primary mr-2"
              >Show</router-link>
  
              <button v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                @click = "removeFavorited(restaurant.id)"
              >
                移除最愛
              </button>
              <button v-else
                type="button"
                class="btn btn-primary"
                @click = "addFavorited(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import NavTab from '../components/NavTabs.vue'

    const dummyData = {

        "restaurants": [
            {
                "id": 50,
                "name": "Raven Kautzer",
                "tel": "170-651-0041 x1918",
                "address": "73707 Khalid Wall",
                "opening_hours": "08:00",
                "description": "Perspiciatis eligendi dolorem nam itaque vel repre",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.116670298422083",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 2,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 49,
                "name": "Emery Schimmel",
                "tel": "1-491-142-4332 x136",
                "address": "96675 Eric Forges",
                "opening_hours": "08:00",
                "description": "Beatae sapiente perspiciatis et et explicabo conse",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.99615729700358",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 5,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 48,
                "name": "Kitty Kiehn",
                "tel": "798-270-3203 x00835",
                "address": "40391 Waino Square",
                "opening_hours": "08:00",
                "description": "eos ut dolores",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.4947524091756",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 2,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 47,
                "name": "Elvie Daugherty PhD",
                "tel": "(775) 576-9909 x90168",
                "address": "13491 Paris Locks",
                "opening_hours": "08:00",
                "description": "Aut voluptas accusantium unde consequuntur.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.993063887978145",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 5,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 46,
                "name": "Linda Daugherty",
                "tel": "842.301.7245",
                "address": "2174 Sporer Ferry",
                "opening_hours": "08:00",
                "description": "Possimus repudiandae pariatur necessitatibus ab oc",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.71530727438099",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 2,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 45,
                "name": "Candice Harris",
                "tel": "1-228-322-4008",
                "address": "427 Brisa Vista",
                "opening_hours": "08:00",
                "description": "Est et id illum expedita molestiae quia voluptatum",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.044929522559556",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 3,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 44,
                "name": "Theresia Armstrong",
                "tel": "(810) 735-6097 x1267",
                "address": "59170 Hodkiewicz Mountain",
                "opening_hours": "08:00",
                "description": "Ut quas dolorem expedita. Et et est rerum eos. Vol",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.45961477826394",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 1,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 43,
                "name": "Maximillia Fay",
                "tel": "874-954-4551 x4890",
                "address": "608 Christopher Plaza",
                "opening_hours": "08:00",
                "description": "Consequatur aut quisquam quaerat deleniti occaecat",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.858916042793616",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 2,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 42,
                "name": "Yadira Ruecker",
                "tel": "518-484-2321 x55622",
                "address": "799 Delbert Fall",
                "opening_hours": "08:00",
                "description": "Aut quos voluptatum neque ea magnam. Est quas volu",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.587913654307346",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 3,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            },
            {
                "id": 41,
                "name": "Mr. Brent Howe",
                "tel": "(700) 199-9815 x44558",
                "address": "873 Lakin Haven",
                "opening_hours": "08:00",
                "description": "quas itaque ratione",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.95495667426208",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 5,
                "FavoritedUsers": [],
                "isFavorited": false,
                "FavoriteCount": 0
            }
        ]
    }

    export default{
        components:{
            NavTab
        },
        data () {
            return {
                topRestaurants: []
            }
        },
        methods: {
            fetchRestaurants () {
                this.topRestaurants = dummyData.restaurants;
            },
            addFavorited (id) {
                const ref = this.topRestaurants.find(restaurant => restaurant.id===id)
                ref.isFavorited = true;
            },
            removeFavorited (id) {
                const ref = this.topRestaurants.find(restaurant => restaurant.id===id)
                ref.isFavorited = false;
            }
        },
        created () {
            this.fetchRestaurants();
        }
    }
</script>