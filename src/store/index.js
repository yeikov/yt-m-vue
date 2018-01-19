import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store= new Vuex.Store({
  state: {
    loadedMeetups: [
       {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', 
       id: 'asdff234sdf', 
       title: 'Meetup in New York',
       date:'2018-07-16'},
       {imageUrl: 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2050/SITours/escapada-de-un-d-a-a-londres-desde-par-s-en-eurostar-con-un-crucero-in-paris-408425.jpg', 
       id: '43qqwerqw', 
       title: 'London',
       date:'2018-07-17'}],
    user: {
      id: 'asasdfasdf',
      registeredMeetups: ['asdff234sdf']
    }
  },
  mutations:{},
  actions:{},
  getters:{
    loadedMeetups(state){
        return state.loadedMeetups.sort((meetupA, meetupB)=>{
          return meetupA.date > meetupB.date
        })
    },
    featuredMeetups(state, getters){
        return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state){
      return (meetupId) => {
        return state.loadedMeetups.find((meetup)=>{
          return meetup.id === meetupId
        })
      }
    }
  }

})