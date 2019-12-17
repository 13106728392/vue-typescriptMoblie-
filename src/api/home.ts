import http from '@/utils/http';

// 全局api调用
export const apiGetSwiperImgs = (data: any, config: any) => {
    return http.post('swiperimgs/list', data, config);
};
