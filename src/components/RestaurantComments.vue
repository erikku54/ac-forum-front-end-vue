<template>
    <div>
      <h2 class="my-4">
        所有評論：
      </h2>
  
      <div v-for="comment in restaurantComments" :key="comment.id">
        <blockquote class="blockquote mb-0">
          <button v-if="currentUser.isAdmin"
            type="button"
            class="btn btn-danger float-end"
            @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          >
            Delete
          </button>
          <h3>
            <a href="#">
              {{comment.User.name}}
            </a>
          </h3>
          <p>{{comment.text}}</p>
          <footer class="blockquote-footer">
            {{fromNow(comment.createdAt)}}
          </footer>
        </blockquote>
        <hr>
      </div>
    </div>
</template>

<script>
    // import moment from 'moment';
    import mixins from '../utils/mixins'

    const dummyUser = {
        currentUser: {
            id: 1,
            name: '管理者',
            email: 'root@example.com',
            image: 'https://i.pravatar.cc/300',
            isAdmin: true
        },
        isAuthenticated: true
    }
    
    export default {
        props: {
            restaurantComments: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                currentUser: dummyUser.currentUser
            }
        },
        methods: {
            handleDeleteButtonClick (id) {
                console.log('handleDeleteButtonClick: ', id);
                //要求後端刪除資料
                //通知父層更新畫面
                this.$emit('after-delete-comment', id)
            }
        },
        setup () {
            const {fromNow} = mixins();
            return {fromNow};
        },





        // methods: {
        //     fromNow (datetime) {
        //         if (!datetime) {
        //             return '-';
        //         }
        //         return moment(datetime).fromNow()
        //     }
        // }
    }




</script>