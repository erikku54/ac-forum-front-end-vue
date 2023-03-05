<template>
    <div class="card">
        <div class="card-header">
        最新評論
        </div>
        <div class="card-body">
            <div v-for="comment in comments" :key="comment.id">
                <h4>
                <router-link :to="{ name: 'restaurant-single', params: {id: comment.Restaurant.id}}">
                    {{comment.Restaurant.name}}
                </router-link>
                </h4>
                <p>{{comment.text}}</p>by
                <a href="#">
                {{comment.User.name}}
                </a>
                {{fromNow(comment.createdAt)}}
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    // import moment from 'moment'
    import mixins from '../utils/mixins'

    export default {
        props: {
            comments: {
                type: Array,
                required: true,
            }
        },

        setup () {
            const {fromNow} = mixins();
            return {fromNow}
        },

        // methods: {
        //     fromNow(datetime) {
        //         if (!datetime) {
        //             return '-'
        //         }

        //         return moment(datetime).fromNow()
        //     }
        // }
    }

</script>