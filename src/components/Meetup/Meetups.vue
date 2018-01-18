<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8>
        <v-card class="info">

          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3 offset-sm1 offset-md2>
                <v-card-media
                    src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
                    height="130px"
                    
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                
                  <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-10">My meetup</h5>
                    <div>17th july 2018.</div>
                  </div>
                  </v-card-title>
                   
                  <v-card-actions>
                    <v-btn flat dark to="/meetups/asdff234sdf">
                    <v-icon left light >arrow_forward</v-icon>
                    View Meetup
                    </v-btn>
                  </v-card-actions>
                  
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>  
</template>
