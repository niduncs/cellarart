  <template>
    <section class="layout-content about">
      <h2>Artist's <span class="header-highlight">Statement</span></h2>
      <p>Bright colours, bold shapes, and interpreting light and shadow are my passions. As you can see by 
        my work I explore a wide variety of subjects and different media. I find I am constantly evolving in my techniques 
        and goals. My desire is for my art to be a never-ending process of learning and absorbing as much as I can. My 
        happiest moment is when another soul connects with my work. I paint anything that pleases me, and if, through my 
        paintings, the viewer has a sense of what I see and an appreciation of the same, then I am truly gratified.
      </p>
      <h2>About the <span class="header-highlight">Artist</span></h2>
      <p>Dale Duncan lives in Orillia, Ontario, where she owns and operates a small hair salon and studio. She enjoys spending 
        time with her two grown children, traveling, and has a great fondness for being outdoors. Dale's artworks, painted in 
        watercolours or acrylics, are inspired by an appreciation of the beautiful and unique character of the Northern Ontario 
        countryside, particularly the hills of the Georgian Bay area, and the farms and hamlets nestled within its embrace.
Dale began painting in 2001. All it took was one workshop with an artist friend and she was hooked on the creative process. Since 
then she has traveled extensively in Canada, the USA, and Central America taking workshops and constantly learning and experimenting
 with new techniques, media, and designs. Dale loves to expand her scope and explore new dimensions with other fellow artists along 
 the way. She has studied and honed her skills with many internationally known artists, teachers, and local painters.
      </p>
    </section>
  </template>

  <script>
    import api from '../../js/api';

    export default {
      data: function() {
        return {
          pageData: null,
        }
      },
      methods: {
        getStuff: function() {
          api.getPageContent("about", function(data) {
            console.log(data);
            return data;
          });
        }
      },
      mounted() {
        this.pageData = this.getStuff();
        console.log(this.pageData);
      }
    }
    
  </script>