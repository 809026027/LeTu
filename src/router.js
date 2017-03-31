// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'
import MyView from './views/MyView.vue'
import LoginView from './views/LoginView.vue'
import MapView from './views/MapView.vue'
import AbilityView from './views/AbilityView.vue'
Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

// Login view factory
function createLoginView () {
    return {
        name: `login-view`,
        render (createElement) {
            return createElement(LoginView)
        }
    }
}

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/top', component: createStoriesView('top') },
    { path: '/new', component: createStoriesView('new') },
    { path: '/show', component: createStoriesView('show') },
    { path: '/ask', component: createStoriesView('ask') },
    { path: '/job', component: createStoriesView('job') },
    { path: '/article/:url(.*)?', component: ArticleView },
    { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/user/:id', component: UserView },
      { path: '/login', component: createLoginView() },
      { path: '/my/:url(.*)?', component: MyView },
      { path: '/map', component: MapView },
      { path: '/ability', component: AbilityView },
    { path: '/', redirect: '/login' }

  ]
})
