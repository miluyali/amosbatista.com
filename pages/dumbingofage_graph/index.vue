<template lang="pug">
  .doa
    styles
    h1
      | Dumbing of Age - The graph
    p.desciption
      | In 11 years full of dramatic webcomic, a lot of characters have been passed throught our lives. Loving, hating, playing, mocking... Exactly as our mundane lifes. But, in this David M Willis modern day soap opera, how much they are connected between themselves? This graph will help. 
    p.description
      b
        |Zoom-in inside this image, and click in each character, 
      |to see who interacted with him, and how often.
    graph-component
    
    .questions-zone
      .questions
        p.question What's Dumbing of Age?
        p.answer It's a webcomic, created by David M Willis in September 10th, 2010. You can read it by this link: 
          a(href="https://www.dumbingofage.com/") https://www.dumbingofage.com/
      
      .questions
        p.question What's a "graph"? 
        p.answer It's a kind of computer drawing that shows 
          b nodes 
          | (in this case, the characters), and 
          b edges, 
          | that shows the relations between two persons. An thicker edge show that these 2 characters have been talked often.
      
      .questions
        p.question How did you make it?
        p.answer I created a 
         b crawler, 
         | a bot that read each Dumbing of Age's page, and read the tag area that shows all character name that have been appeared in this respective page. I could enter in more details, but I'm afraid it could be very technical and boring.
        
      .questions
        p.question So, it's not a "relationship" graph, but only a counter of how many characters has been showed in each page?
        p.answer Kind of. But it can be for relationship too, because it's rare 2 characters appearing in one page and not talking to each other. 
        
      .questions
        p.question That's only shows the main characters. There's a lot more.
        p.answer Yes, but I have to limit the character list to those that appeared at least 5 pages. Showing all people could make this graph even more slower. 
      
      .questions
        p.question Why did you make it?
        p.answer I love Dumbing of Age, graphs and front-end development. So I wanted to make this work together.
        
      .questions
        p.question Are you expanding this graph? Can I make a suggestion to you?
        p.answer Yes, having some interest, I'll improve this graph.
        
      .questions
        p.question Where I can find this crawler?
        p.answer I gonna ask the author if he don't have any problem in show the code repository.
      
      .questions
        p.return
          a(href="/") Return to home 
        
</template>

<script>
import graphComponent from './components/graph';
import styles from '../../components/external-link-style.vue'

export default {
  components: { graphComponent, styles }
}
</script>

<style lang="less">
  @import '../../assets/generic.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/objects.less';
  @import '../../assets/base.less';

  .doa {
    padding: 15px;
  }
  h1 {
    font-family: @title-font;
    color: @color-primary;
    line-height: 72px;
    font-size: 300%;
    letter-spacing: -5px;
    text-align: center;
  }
  
  p {
    margin: 10px 5%;
    text-indent: 20px;
    font-family: @base-font;
    color: @color-secundary;
  }
  
  .questions-zone {
    margin: 50px 0;
    
    .questions {
      margin-bottom: 30px;
    }
    
    .question {
      color: @color-terciary;
      font-style: italic;
      &:before {
        content: "Q: "
      }
    }
    
    .answer {
      &:before {
        content: "A: "
      }
    }
    
    .return {
      color: @color-terciary;
    }
  }
</style>