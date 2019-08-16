export default{
    state:{
        count: 0,
    },
    mutations: {
        SAVE_ITEM: (state, {payload}) => {
            state.count = payload.count;
        }
    },
    actions: {
        fetch_login_init: ({commit}, {payload}) => {
            commit({
                type: "SAVE_ITEM",
                payload: {
                    count: 1
                }
            })
        }
    }
}