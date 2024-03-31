import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
    state: () => ({
        component: 'Home',
        slug: '',
        header: {
            title: 'Welcome to Joshua Aro\'s Portfolio',
            subtitle: 'Bachelor of Science in Information Technology',
            action: 'My Gallery',
            parallax: {
                location: './images/family.jpg'
            }
        },
        content: {
            title: 'About Me',
            description: [
                'Hey there! I am Joshua Aro, and i am Thrilled to have you here. Let me give a glimpse into who I am and what makes me tick',
                'Who am I?',
                'I am currently a student at Cordova Public College, where I am pursuing a Bachelor of Science in Information Technology with a major in Programming. For me, technology is not just a subject; it is a passion that drives me to explore, create, and innovate.',
                'Why Information Technology?',
                'Ever since I was young, I have been captivated by the endless possibilities that technology offers. From coding to problem-solving, I find joy in every aspect of IT. It is not just about understanding computers; it is about shaping the future through innovation and digital solutions.',
                'What Sets Me Apart?',
                'What sets me apart is my relentless curiosity and eagerness to learn. Whether it is mastering a new programming language or tackling complex algorithms, I thrive on challenges that push me to grow and evolve. ',
                'My Vision',
                'In the fast-paced world of technology, I envision myself as a catalyst for change. I aspire to leverage my skills and knowledge to make a meaningful impact, whether it is through developing groundbreaking software or revoluionizing existing systems.',
                'Let us Connect',
                'I am always eager to connect with fellow enthusiasts, professionals, and anyone who shares my passion for technolgy. Feel free to reach out, and let us embark on this exciting journey together.',
                'Thanks for stopping by, and look forward to connecting with you!'
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
