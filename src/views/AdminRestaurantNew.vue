<template>
    <div class="container py-5">
        <!-- 餐廳表單 -->
        <AdminRestaurantForm 
        @after-submit="handleAfterSubmit"/>
    </div>
</template>

<script>


    import AdminRestaurantForm from '@/components/AdminRestaurantForm.vue';

    export default {
        components: {
            AdminRestaurantForm,
        },
        methods: {
            handleAfterSubmit (formData) {

                for (let [name, value] of formData.entries()) {
                    console.log(`${name}: ${value}`);
                }
            }
        }

    }

</script>