<template>
    <div class="card mb-3">
        <div class="row no-gutters">
        <div class="col-md-4">
            <img :src="image" width="300" height="300">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">
                {{email}}
            </p>
            <ul class="list-unstyled list-inline">
                <li><strong>{{commentsNum}}</strong> 已評論餐廳</li>
                <li><strong>{{favoritedRestaurantNum}}</strong> 收藏的餐廳</li>
                <li><strong>{{followersNum}}</strong> followings (追蹤者)</li>
                <li><strong>{{followingsNum}}</strong> followers (追隨者)</li>
            </ul>
            <p></p>
                    <button v-if="isFollowed"
                     class="btn btn-danger"
                     @click="removeFollowed">取消追蹤</button>
                    <button v-else
                    class="btn btn-primary"
                    @click="addFollowed">加入追蹤</button>
            <p></p>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            commentsNum: {
                type: Number,
                required: true,
            },
            favoritedRestaurantNum: {
                type: Number,
                required: true,
            },
            followersNum: {
                type: Number,
                required: true,
            },
            followingsNum: {
                type: Number,
                required: true,
            },
            initialIsFollowed: {
                type: Boolean,
                required: true,
            }
        },
        data () {
            return {
                isFollowed: this.initialIsFollowed,
            }
        },
        methods: {
            addFollowed () {
                this.$emit('add-followed');
                this.isFollowed = true;
            },
            removeFollowed () {
                this.$emit('remove-followed');
                this.isFollowed = false;
            }
        }
    }

</script>
