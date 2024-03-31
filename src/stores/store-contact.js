import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', {
    state: () => ({
        component: 'Contact me',
        slug: 'contact',
        header: {
            title: 'Contact Me',
            subtitle: '',
            parallax: {
                location: './images/header-2.jpg'
            }
        },
        content: {
            title: 'Unshackle the Wonders of Technology',
            card_title: 'Send me a message',
            description: [
                'Welcome to my contact page, a portal for connecting through the wonders of technology. Whether you\'re a tech enthusiast, a curious learner, or anyone in between, I encourage you to reach out and embark on this exciting journey with me.',
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
