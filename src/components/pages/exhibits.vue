<template>
  <section class="layout-content exhibits">
    <h3 class="exhibits-header">Ongoing <span class="header-highlight">Exhibits</span></h3>
    <div class="ongoing exhibits" v-if="loaded && events">
      <article class="exhibit-container" v-for="event in events.ongoing">
        <span class="exhibit-title">{{event.title}}</span>
        <ul>
          <li>{{event.dates}}</li>
          <li><a :href="event.website">{{event.link_text === null ? event.website : event.link_text}}</a></li>
        </ul>
      </article>
    </div>
    <h3 class="exhibits-header">Upcoming <span class="header-highlight">Exhibits</span></h3>
    <div class="ongoing exhibits" v-if="loaded && events">
      <article class="exhibit-container" v-for="event in events.upcoming">
        <span class="exhibit-title">{{event.title}}</span>
        <ul>
          <li>{{event.dates}}</li>
          <li><a :href="event.website">{{event.link_text === null ? event.website : event.link_text}}</a></li>
        </ul>
      </article>
    </div>
    <h3 class="exhibits-header">Previous <span class="header-highlight">Exhibits</span></h3>
    <div class="previous exhibits" v-if="loaded && events">
      <article class="exhibit-container"v-for="event in events.past">
        <span class="exhibit-title">{{event.title}}</span>
        <ul>
          <li>{{event.dates}}</li>
          <li><a :href="event.website">{{event.link_text === null ? event.website : event.link_text}}</a></li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
  import api from '../../js/api';

  export default {
    data() {
      return {
        events: null,
        loaded: false,
      }
    },
    methods: {
      getEvents: function() {
        api.getPageContent("events", (data) => {
          this.events = data;
          this.loaded = true;
        });
      }
    },
    created() {
      this.getEvents();
    }
  }
</script>