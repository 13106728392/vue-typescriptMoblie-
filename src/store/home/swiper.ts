import { Commit } from 'vuex';
import { apiGetSwiperImgs } from '@/api/home';
const state: any = {
    swiperImgs: [],
};

const getters: any = {
    swiperImgs: () => state.swiperImgs,
};

const mutations: any = {
    saveSwiperImgs(states: any, data: any) {
        states.swiperImgs = data;
      },
};

const actions: any = {
    // 获取本地的数据
    async swiperImgs(context: { commit: Commit }) {
        console.log('通过action获取swiperImgs数据');
        const res: any = {
            Code: 1,
            List: [
                {src: require('../../assets/p1.png'), name: ''},
                {src: require('../../assets/p2.png'), name: ''},
                {src: require('../../assets/p3.png'), name: ''} ],
        };
        context.commit('saveSwiperImgs', res.List);
    },
    // 调用api获取数据
    // async swiperImgs(context: { commit: Commit }, data: any) {
    //     console.log('通过action获取swiperImgs数据');
    //     const res: any = await apiGetSwiperImgs(data, null);
    //     context.commit('saveSwiperImgs', res);
    // },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
