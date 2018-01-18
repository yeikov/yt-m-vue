<template>
  <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm6 class="text-xs-center text-sm-right"> 
      <v-btn large router to="/meetups" >Explore Meetups</v-btn>
    </v-flex>
    <v-flex xs12 sm6 class="text-xs-center text-sm-left"> 
      <v-btn large router to="/meetup/new">Organize Meetup</v-btn>
    </v-flex>
  </v-layout>

  <v-layout row wrap class="mt-2">
    <v-flex xs12>
      <v-carousel style="cursor: pointer;">
        <v-carousel-item 
          v-for="meetup in meetups" 
          :src="meetup.imageUrl" 
          :key="meetup.id"
          @click="onLoadMeetup(meetup.id)">
          <div class="title">{{meetup.title}}
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>

  <v-layout row wrap class="mt-2">
    <v-flex xs12 class="text-xs-center"> 
      <p>Join our awesome meetups!</p>
    </v-flex>
    
  </v-layout>

  </v-container>
</template>
<script>
  export default{
    data(){
      return{
        meetups: [
          {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', id: 'asdff234sdf', title: 'Meetup in New York'},
          {imageUrl: 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2050/SITours/escapada-de-un-d-a-a-londres-desde-par-s-en-eurostar-con-un-crucero-in-paris-408425.jpg', id: '43qqwerqw', title: 'London'}
        ]
      }
    },
    methods:{
      onLoadMeetup (id){
        this.$router.push('/meetups/'+id)
      }
    }
  }
</script>
<style scoped>
  .title{
    position: absolute;
    bottom: 50px;
    color: white;
    background-color: rgba(0,0,0,0.5);
  }
</style>