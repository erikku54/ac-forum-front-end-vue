<template>
    <form @submit.stop.prevent="handleSubmit($event)">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="restaurant.name"
          type="text"
          class="form-control"
          name="name"
          placeholder="Enter name"
          required
        >
      </div>
  
      <div class="form-group">
        <label for="categoryId">Category</label>
        <select
          id="categoryId"
          v-model="restaurant.categoryID"
          class="form-control"
          name="categoryId"
          required
        >
          <option
            value=""
            selected
            disabled
          >
            --請選擇--
          </option>

          <option v-for="category in categories" :key="category.id" 
            :value="category.id">
            {{ category.name }}
          </option>

        </select>
      </div>
  
      <div class="form-group">
        <label for="tel">Tel</label>
        <input
          id="tel"
          v-model="restaurant.tel"
          type="text"
          class="form-control"
          name="tel"
          placeholder="Enter telephone number"
        >
      </div>
  
      <div class="form-group">
        <label for="address">Address</label>
        <input
          id="address"
          v-model="restaurant.address"
          type="text"
          class="form-control"
          placeholder="Enter address"
          name="address"
        >
      </div>
  
      <div class="form-group">
        <label for="opening-hours">Opening Hours</label>
        <input
          id="opening-hours"
          v-model="restaurant.openingHours"
          type="time"
          class="form-control"
          name="opening_hours"
        >
      </div>
  
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="restaurant.description"
          class="form-control"
          rows="3"
          name="description"
        />
      </div>
  
      <div class="form-group">
        <label for="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change = 'handleFileChange($event)'
        >
      </div>

      <img v-if="restaurant.image" :src="restaurant.image" 
        class="d-block img-thumbnail mb-3" 
        alt="image to upload" width="200" height="200" >
  
      <button
        type="submit"
        class="btn btn-primary"
      >
        送出
      </button>
    </form>
  </template>


<script>

    const dummyData = {
        categories: [
            {
            id: 1,
            name: '中式料理',
            createdAt: '2019-06-22T09:00:43.000Z',
            updatedAt: '2019-06-22T09:00:43.000Z'
            },
            {
            id: 2,
            name: '日本料理',
            createdAt: '2019-06-22T09:00:43.000Z',
            updatedAt: '2019-06-22T09:00:43.000Z'
            },
            {
            id: 3,
            name: '義大利料理',
            createdAt: '2019-06-22T09:00:43.000Z',
            updatedAt: '2019-06-22T09:00:43.000Z'
            },
            {
            id: 4,
            name: '墨西哥料理',
            createdAt: '2019-06-22T09:00:43.000Z',
            updatedAt: '2019-06-22T09:00:43.000Z'
            }
        ]
    }


    export default {
        props: {
            initialRestaurant: {
                type: Object,
                default: () => ({
                    id: -1,
                    name: '',
                    categoryID: '',
                    tel: '',
                    address: '',
                    description: '',
                    image: '',
                    openingHours: ''                  
                })
            }
        },
        data () {
            return {
                restaurant: {
                    name: this.initialRestaurant.name,
                    categoryID: this.initialRestaurant.categoryID,
                    tel: this.initialRestaurant.tel,
                    address: this.initialRestaurant.address,
                    description: this.initialRestaurant.description,
                    image: this.initialRestaurant.image,
                    openingHours: this.initialRestaurant.openingHours
                },
                categories: []
            }
        },
        methods: {
            fetchCategories () {
                this.categories = dummyData.categories;
            },
            handleFileChange (e) {
                const files = e.target.files;
                // console.log('files', files);

                if (files.length === 0)
                    return;

                const imgUrl = window.URL.createObjectURL(files[0]);
                this.restaurant.image = imgUrl;

            },
            handleSubmit (e) {
                const form = e.target

                const formData = new FormData(form);

                // for (let [name, value] of formData.entries()) {
                //     console.log(`${name}: ${value}`);
                // }
                this.$emit('after-submit', formData);
            }
        },
        created () {
            this.fetchCategories();
        }
    }

</script>