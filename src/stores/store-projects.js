import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
    state: () => ({
        component: 'Projects',
        slug: 'projects',
        header: {
            title: 'My Projects',
            subtitle: 'Step in to my projects and future projects',
            parallax: {
                location: './images/header-1.jpg'
            }
        },
        content: {
            title: 'Projects',
            description: [
                'The purpose of this page is to post all of my projects in the future. As of now, I am still working on it.',
                'Please look forward for my future projects, as I share it to you soon!.'
            ]

        },
        footer: {

        }
    }),

    getters: {

    },

    actions: {

    },
});
