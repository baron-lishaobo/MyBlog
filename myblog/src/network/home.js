import { request } from "network/request";


export function getHomeData() {
    return request({ url: '/weatherforecast' })
}