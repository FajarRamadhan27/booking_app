import axiosClient from "../AxiosClient";

export function getEventSchedules(setState) {
    axiosClient.get('/event-schedules')
        .then(res => {
            const {data} = res.data
            setState(data)
        })
}
