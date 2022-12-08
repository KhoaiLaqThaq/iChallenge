import { Module } from "vuex";

const items = [
    {
        name: "Profile",
        imageURL: "avatar.png",
        title: "label.profile"
    },
    {
        name: "FriendList",
        imageURL: "network.png",
        title: "label.friends"
    },
    {
        name: "Recents",
        imageURL: "recent.png",
        title: "label.recents"
    },
    {
        name: "Lessons",
        imageURL: "lesson.png",
        title: "label.lesson"
    },
    {
        name: "Solo",
        imageURL: "solo.png",
        title: "label.solo"
    }
];

const module: Module<any, any> = {
    namespaced: false,
    state: {
        sidebar: items
    },
    mutations: {},
    actions: {}
}

export default module;
