<template lang="pug">
  .doa
    styles
    h1
      | Dumbing of Age - The graph
    p.desciption
      | In 11 years full of dramatic webcomic, a lot of characters have passed through our lives. Loving, hating, playing, mocking... Exactly as our mundane lives. But, in this David M Willis modern-day soap opera, how much are they connected to each other? This graph will help. 
    p.description
      b
        |Zoom-in inside this image and click on each character  
      |to see who interacted with who, and how often!!
    graph-component
    
    .questions-zone
      p.sub-title Q & A
      .questions
        p.question What's Dumbing of Age?
        p.answer It's a webcomic, created by David M Willis on September 10th, 2010. You can read it at this link: 
          a(href="https://www.dumbingofage.com/") https://www.dumbingofage.com/
      
      .questions
        p.question What's a "graph"? 
        p.answer It's a kind of computer drawing that shows 
          b nodes 
          | (in this case, the characters), and 
          b edges, 
          | that show the relations between two people. A thicker edge shows that these 2 characters have interacted more often.
      
      .questions
        p.question How did you make it?
        p.answer I created a 
         b crawler, 
         | a bot that read every page of Dumbing of Age, and read the tag area that shows the names of all the characters that appear on any given page. I could enter into more detail, but I'm afraid it could be very technical and boring.
        
      .questions
        p.question So, it's not a "relationship" graph, but only a counter of how many characters have been shown in each page?
        p.answer Kind of. But it can be for relationships too, because it's rare for 2 characters to appear in one page and not talk to each other. 
        
      .questions
        p.question That only shows the main characters. There are a lot more.
        p.answer Yes, but I have to limit the character list to those that appear in at least 5 pages. Showing all the people could make this graph even slower.
      
      .questions
        p.question Why did you make it?
        p.answer I love Dumbing of Age, graphs and front-end development. So I wanted to make this work together.
        
      .questions
        p.question Are you expanding this graph? Can I make a suggestion to you?
        p.answer Yes, if I'm interested in your idea, I'll improve this graph.
        
      .questions
        p.question Where can I find this crawler?
        p.answer I'm gonna ask the author if he doesn't mind showing the code repository.
    
    .thank-notes
      p.sub-title Thank notes
      ul
        li
          b Milu 
          |(
          a(href="https://github.com/miluyali") https://github.com/miluyali
          |,  
          a(href="https://miluburner@protonmail.com/") https://miluburner@protonmail.com
          |) for taking the iniciative to review all text.
      
    .returning-home
      p.return.sub-title
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
  
  p, ul {
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
  }
  
  .sub-title {
    color: @color-terciary;
    font-size: 130%;
    margin: 35px 5%;
  }
</style>
