import axiosClient from "../AxiosClient"

export function getSeats(facility_id, setState) {
    axiosClient.get('/seats', { params: { facility_id }}).then(res => {
        const {data} = res.data
        setState(data)
    })
}
