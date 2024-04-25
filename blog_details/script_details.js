"use strict";
Vue.component('block_articles',{
  template:
`<div class='block_article'>
<div class='list_article'>
<kitchen v-show="selectedTag === 'kitchen'"></kitchen>
<building v-show="selectedTag === 'building'"></building>
</div> 

<div class='list_buttons'>

  <h2 >Tags</h2> <br>
  <div class='list_button'>
   <div v-for="item in buttons" :key="item.id">  
   
    <button class='button_details' @click='filterArticles(item.id)' :class='{button_click:selectedTag === item.id}'type="">{{item.nameButton}} </button>
  </div>
  </div>
  
  </div>
</div>`,

data() {
  return {
    buttons: [
      {id:'kitchen',nameButton:"Kitchen" },
      {id:'bedroom',nameButton:"Bedroom" },
      {id:'building',nameButton:"Building" },
      {id:'architecture',nameButton:"Architecture" },
    ] ,
    selectedTag:'kitchen',
  };
},
methods: {
  filterArticles(id){
    this.selectedTag = id;
    

  }
},


})

Vue.component("kitchen", {
  template: ` <div>
        <div v-for="(item, index) in blocks" :key="index">       
        
            <h1>{{item.title}}</h1>
           <img :src='item.imgPhoto'alt="img"/>
           <div class='dateHref'>
           <p>{{ item.date}}</p>
           <div class='aHref'>
           <a>{{item.href_1}}</a>
           <a>{{item.href_2}}</a>
           <a>{{item.href_3}}</a>
           </div>
           </div>
           <p>{{item.text}}</p>        
           
          
            </div>   
    </div>`,
  data() {
    return {
      blocks: [
        {
           title:
            "Let’s Get Solution for Building                 Construction Work",
          imgPhoto: "../img/Image_details_kitchen.jpg",
          date: "26 December,2022 ",
          href_1: "Interior /",
          href_2: "Home /",
          href_3: "Decore",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. 
                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        },
       
      ],
    };
  },
});

Vue.component("building", {
  template: ` <div>
        <div v-for="(item, index) in blocks" :key="index">       
        
            <h1>{{item.title}}</h1>
           <img :src='item.imgPhoto'alt="img"/>
           <div class='dateHref'>
           <p>{{ item.date}}</p>
           <div class='aHref'>
           <a>{{item.href_1}}</a>
           <a>{{item.href_2}}</a>
           <a>{{item.href_3}}</a>
           </div>
           </div>
           <p>{{item.text}}</p>        
           
          
            </div>   
    </div>`,
  data() {
    return {
      blocks: [
        
        {
          title:
            "Let’s Get Solution for Building                 Construction Work",
          imgPhoto: "../img/Image_details_bedroom.jpg",
          date: "26 December,2022 ",
          href_1: "Interior /",
          href_2: "Home /",
          href_3: "Decore",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. 
                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        },
      ],
      clickToggle: false,
    };
  },
});

new Vue({
  el: "#app",
  data: {},
});
