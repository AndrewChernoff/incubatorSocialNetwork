import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b49b9dd7-8e2c-4c41-b9f5-9d544e361570"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const usersAPI = {
    getUsers(pageSize, currentPge) {
        return instance.get(`users?count=${pageSize}&page=${currentPge}`
        ).then(response => {
            return response.data;
        })
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`
        ).then(response => {
            return response.data
        })
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => {
            return response.data
        })
    },

    getProfile(userId) {
        console.log('obsolete method')
        return profileAPI.getProfile(userId);
    }


}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me', {
            withCredentials: true
        }).then(response => {
            return response.data;
        })
    }
}
