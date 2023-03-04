<template>
    <div class="container py-5">
        <NavTabs/>
        <h1 class="mt-5">
            首頁-餐廳列表
        </h1>
        <!-- 餐廳類別標籤 RestaurantPills-->
        <RestaurantNavPills :categories="categories"/>
        <!-- 餐廳卡片 RestaurantCard -->
        <div class="row">
            <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
        </div>
        <!-- 分頁標籤 RestaurantPagination -->
    </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from '@/components/RestaurantCard.vue';
import RestaurantNavPills from '@/components/RestaurantNavPills.vue';

let dummyData={
        "restaurants": [
            {
                "id": 1,
                "name": "Devyn Nolan MD",
                "tel": "(283) 815-9713",
                "address": "0356 Cormier Mountain",
                "opening_hours": "08:00",
                "description": "In suscipit beatae laboriosam iste quia voluptates",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.42400489643676",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                },
                "isFavorited": true,
                "isLiked": false
            },
            {
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
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 3,
                "name": "Raleigh Huel",
                "tel": "388.503.3478",
                "address": "780 Rath Canyon",
                "opening_hours": "08:00",
                "description": "rerum libero autem",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.04939914236259",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                },
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 4,
                "name": "Terrence Volkman",
                "tel": "094.385.8725",
                "address": "5435 Daryl Roads",
                "opening_hours": "08:00",
                "description": "Neque voluptas quasi quia.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.79758063065594",
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
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 5,
                "name": "Jaden Murphy",
                "tel": "850-489-6338",
                "address": "98291 Raul Row",
                "opening_hours": "08:00",
                "description": "modi",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.76528999210677",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 3,
                "Category": {
                    "id": 3,
                    "name": "義大利料理",
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                },
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 6,
                "name": "Tate Nader",
                "tel": "1-206-652-9976 x009",
                "address": "9857 Gleichner Islands",
                "opening_hours": "08:00",
                "description": "Aut vel inventore consequuntur.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.894592002107115",
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
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 7,
                "name": "Ayana Wilderman",
                "tel": "1-966-261-1536 x52385",
                "address": "84511 Raoul Mews",
                "opening_hours": "08:00",
                "description": "Nobis hic tenetur nam nulla deleniti tempora inven",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.543761732838",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 4,
                "Category": {
                    "id": 4,
                    "name": "墨西哥料理",
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                },
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 8,
                "name": "Isabella Deckow",
                "tel": "505.856.6879",
                "address": "371 Lang Fall",
                "opening_hours": "08:00",
                "description": "Nostrum omnis pariatur sit ut doloribus.\nId quasi ",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.927260317474254",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 2,
                "Category": {
                    "id": 2,
                    "name": "日本料理",
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                },
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 9,
                "name": "Scotty Mueller",
                "tel": "1-539-516-0261",
                "address": "2481 Klein Valleys",
                "opening_hours": "08:00",
                "description": "Aut consequatur dolorum doloribus dicta reiciendis",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.895927415548389",
                "viewCounts": 0,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "CategoryId": 4,
                "Category": {
                    "id": 4,
                    "name": "墨西哥料理",
                    "createdAt": "2023-03-02T13:43:59.000Z",
                    "updatedAt": "2023-03-02T13:43:59.000Z"
                },
                "isFavorited": false,
                "isLiked": false
            },
            {
                "id": 10,
                "name": "Deion Bruen",
                "tel": "(606) 721-7516",
                "address": "552 Gulgowski Freeway",
                "opening_hours": "08:00",
                "description": "dolores non dolore",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.82659446983766",
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
                "isFavorited": false,
                "isLiked": false
            }
        ],
        "categories": [
            {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            {
                "id": 6,
                "name": "美式料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            },
            {
                "id": 7,
                "name": "複合式料理",
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z"
            }
        ],

        "categoryId": "",
        "page": 1,
        "totalPage": [1, 2, 3, 4, 5],
        "prev": 1,
        "next": 2
    }


export default {
    data () {
        return {
            restaurants: [],
            categories: [],
            categoryId: -1,
            currentPage: 1,
            totalPage: [],
            previousPage: -1,
            nextPage: -1
        }
    },
    components: {
        NavTabs,
        RestaurantCard,
        RestaurantNavPills
    },
    created () {
        this.fetchRestaurants()
    },
    methods: {
        fetchRestaurants () {
            const {restaurants,
                categories,
                categoryId,
                page,
                totalPage,
                prev,
                next} = dummyData

            this.restaurants = restaurants
            this.categories = categories
            this.categoryId = categoryId
            this.currentPge = page
            this.totalPage = totalPage
            this.previousPage = prev
            this.nextPage = next
        }
    }
}
</script>
