import axios from "axios"

export const usersAPI = {
    getUsers: (pageSize, currentPge) => {
        return instance.get(`/users?count=${pageSize}&page=${currentPge}`, {
            withCredentials: true
        }).then(response => {
            return response.data;
        })
    }
}


const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "b49b9dd7-8e2c-4c41-b9f5-9d544e361570"
        }, 
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    
})

/* export const getUsers = (pageSize, currentPge) => {
    return instance.get(`/users?count=${pageSize}&page=${currentPge}`, {
        withCredentials: true
    }).then(response => {
        return response.data;
    })
} */

export const unfollowUser = (userId) => {
    return  instance.delete(`follow/${userId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "b49b9dd7-8e2c-4c41-b9f5-9d544e361570"
        }
    }).then(response => {
        return response.data
    })

}

export const followUser = (userId) => {
    return   instance.post(`follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "b49b9dd7-8e2c-4c41-b9f5-9d544e361570"
        }
    }).then(response => {
        return response.data
    })
}

export const logIn = () => {
    return   instance.get('auth/me', {
        withCredentials: true
    }).then(response => {
        return response.data;
    })
}