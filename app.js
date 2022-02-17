// connect vue to our HTML code
const app = Vue.createApp({
    data(){ // the data property is a function which is required by VUe
        return{ // always return an OBJECT
            courseGoal: 'Finish the course and learn Vue', // these values can be of any TYPE you specify e.g. An Object, INT, Bool, etc.   
            dummyObj: {name: "Seyur Lutchminarain"}, //OBJECT Example
            vueLink: 'https://vuejs.org/' // Link
        };
    },
    methods: { //methods allow you to defn function to execute for certain events

    }
}); // First Step is to create Vue app component 

app.mount("#user-goal"); // mount vue to the section we wish to manipulate
