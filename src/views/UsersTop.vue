<template>
    <div class="container py-5">
      <NavTab />
      <h1 class="mt-5">
        美食達人
      </h1>
      <hr>
      <div class="row text-center">
        <div class="col-3" v-for="(user, index) in users" :key="user.id">
          <a href="#">
            <img
              src="../assets/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg"
              width="140" height="140">
          </a>
          <h2>{{user.name}}</h2>
          <span class="badge bg-secondary">追蹤人數：{{user.FollowerCount}}</span>
          <p class="mt-3">
            <button v-if="user.isFollowed"
                @click="disfollow"
                :data-index="index"
              type="button"
              class="btn btn-danger">
              取消追蹤
            </button>
            <button v-else
               @click="follow"
                :data-index="index"
              type="button"
              class="btn btn-primary">
              追蹤
            </button>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    import NavTab from '../components/NavTabs.vue'

    const dummyData = {
        "users": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$RBj4w8mvC7JpdSjNMKtJz.yb/StLYs16BZWgCpEtQ1L5OcpWtbouS",
                "isAdmin": true,
                "image": null,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "Followers": [],
                "FollowerCount": 0,
                "isFollowed": false
            },
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$/zPWX2s4l6dzqGlB.EspIerSlvxX2urcBHh3vacCsDJ1F54gNIlKe",
                "isAdmin": false,
                "image": null,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "Followers": [],
                "FollowerCount": 0,
                "isFollowed": false
            },
            {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$hYzdLfqx.fhhvK3NJ9Y1PeeUITXXchDJK3Gv5VSJpfn.53Ftk4u5C",
                "isAdmin": false,
                "image": null,
                "createdAt": "2023-03-02T13:43:59.000Z",
                "updatedAt": "2023-03-02T13:43:59.000Z",
                "Followers": [],
                "FollowerCount": 0,
                "isFollowed": false
            }
        ]
    }


    export default{
        components:{
            NavTab
        },
        data () {
            return {
                users: []
            }
        },
        methods: {
            fetchData () {
                this.users = [...dummyData.users] 
            },
            follow (event) {
                const index = event.target.dataset.index;

                this.users[index].isFollowed = true;
            },
            disfollow (event) {
                const index = event.target.dataset.index;

                this.users[index].isFollowed = false;
            }
        },
        created () {
            this.fetchData();
        }
    }

</script>