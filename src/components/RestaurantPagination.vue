<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li :class="['page-item', {disabled: currentPage === 1}]" v-show="previousPage">
        <a class="page-link" :to="{name: restaurant, query: {categeoryId, page: previousPage}}" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        <li :class="['page-item', {active: currentPage === page} ]" 
            v-for="page in totalPage" :key="page">
            <router-link class="page-link" :to="{name: 'restaurants', query: {categeoryId, page}}">{{page}}</router-link>
        </li>
        <li :class="['page-item', {disabled: currentPage === totalPage.length}]">
        <router-link class="page-link" :to="{name: restaurant, query: {categeoryId, page: nextPage}}" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </router-link>
        </li>
    </ul>
    </nav>
</template>


<script>

    export default {

        props: {
            categoryId: {
                type: [String, Number],
                default: ''
            },
            currentPage: {
                type: Number,
                default: 1
            },
            totalPage: {
                type: Array,
                required: true
            },
            previousPage: {
                type: Number,
                required: true
            },
            nextPage: {
                type: Number,
                required: true
            }
        }
    }

</script>

