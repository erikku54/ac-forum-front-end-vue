<template>
    <div class="container py-5">
      <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit="handleAfterSubmit" />
    </div>
</template>
  

<script>

    import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
  
    const dummyData = {
        'restaurant': {
            'id': 1,
            'name': 'Laurence Reynolds',
            'tel': '1-657-067-3756 x9782',
            'address': '187 Kirlin Squares',
            'opening_hours': '08:00',
            'description': 'sit est mollitia',
            'image': 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
            'viewCounts': 1,
            'createdAt': '2019-07-30T16:24:55.432Z',
            'updatedAt': '2019-07-30T17:26:43.260Z',
            'CategoryId': 3,
            'Category': {
            'id': 3,
            'name': '義大利料理',
            'createdAt': '2019-07-30T16:24:55.429Z',
            'updatedAt': '2019-07-30T16:24:55.429Z'
            }
        }
    }

    export default {
        components: {
        AdminRestaurantForm
        },
        data () {
            return {
            restaurant: {
                id: -1,
                name: '',
                categoryId: '',
                tel: '',
                address: '',
                description: '',
                image: '',
                openingHours: ''
            }
            }
        },
        methods: {
            handleAfterSubmit (formData) {
                // 透過 API 將表單資料送到伺服器
                for (let [name, value] of formData.entries()) {
                    console.log(name + ': ' + value)
                }
            },
            fetchRestaurant (restaurantId) {
                console.log('fetchRestaurant id:', restaurantId);

                this.restaurant = {
                    ...this.restaurant,
                    id: dummyData.restaurant.id,
                    name: dummyData.restaurant.name,
                    categoryId: dummyData.restaurant.CategoryId,
                    tel: dummyData.restaurant.tel,
                    address: dummyData.restaurant.address,
                    description: dummyData.restaurant.description,
                    image: dummyData.restaurant.image,
                    openingHours: dummyData.restaurant.opening_hours                 
                }
            }
        },
        created () {
            const { id } = this.$route.params;            
            this.fetchRestaurant(id);
        }
    }
</script>