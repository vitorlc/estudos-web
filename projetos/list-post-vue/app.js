// URL da API
const baseUrl = "http://jsonplaceholder.typicode.com";

// Componente Lista
const List = {
    template: '#list-template',
    data: () => ({
        posts: []
    }),
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get(baseUrl + `/posts`).then(response => {
                this.posts = response.data;
                console.log(this.posts);
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

// Componente Post
const Post = {
    template: '#post-template',
    data: () => ({
        post: null
    }),
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            var id = this.$route.params.id;
            axios.get(baseUrl + `/posts/` + id).then(response => {
                this.post = response.data
                console.log(this.post);
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

// Criar vue router
var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: List
        }, {
            name: 'post',
            path: '/:id',
            component: Post
        }
    ]
});

// Criar vue instance com router, e mount no #app
var vue = new Vue({router});
var app = vue.$mount('#app');