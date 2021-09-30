import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d66327ed-6b77-485d-934e-ec9d8785c19c"
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
    },

    savePhoto(photo) {
        const formData = new FormData();

        formData.set('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me', {
            withCredentials: true
        }).then(response => {
            return response.data;
        })
    },

    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },

    logout() {
        return instance.delete('auth/login')
    }
}
