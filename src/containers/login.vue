<template>
    <div>
        login{{count}}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    created: function() {
        this.$store.dispatch({
            type: 'fetch_login_init',
        })
    },
    computed: mapState({
        count: state => state.login.count,
    })
}
</script>

<style scoped>

</style>