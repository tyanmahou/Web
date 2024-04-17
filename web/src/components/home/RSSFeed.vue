<template>
  <div class="feed">
    <table>
      <tbody>
        <tr v-for="item in sortedFeedItems" :key="item.guid">
          <td>
            <p class="date">{{ item.pubDateTokyo }}</p>
            <p class="title"><a :href="item.link" target="_blank">{{ item.title }}</a></p>
          </td>
          <td> <a :href="item.feedLink" target="_blank">
              <p class="feed-title">{{ item.feedTitle }}</p>
            </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment-timezone';

export default {
  name: "RSSFeed",
  data() {
    return {
      feedItems: [],
    };
  },
  components: {
  },
  computed: {
    sortedFeedItems() {
      // pubDataを基準に記事を降順にソート
      return this.feedItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    },
  },
  mounted() {
    this.fetchRSSFeeds();
  },
  methods: {
    fetchRSSFeeds() {
      const requests = [
        "https://qiita.com/tyanmahou/feed",
        "https://mahou-ptr.hatenablog.com/rss",
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCWh2iVqxwFO30ik27gZmNAg"
      ].map(url =>
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
      );

      axios.all(requests)
        .then(responses => {
          responses.forEach(response => {
            const data = response.data;
            const fixedData = data.items.map(item => {
              item.pubDateTokyo = moment.utc(item.pubDate, "YYYY-MM-DD HH:mm:ss").tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
              item.feedTitle = data.feed.title;
              item.feedLink = data.feed.link + item.author; // Qiitaのリンクがおかしいので暫定的にauthorを足してる
              return item;
            });
            this.feedItems = this.feedItems.concat(fixedData);
          });
        })
        .catch(error => {
          console.error('Error fetching RSS feeds:', error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

.feed {
  $viewCount: 5;
  height: $viewCount * 45px;
  overflow-y: scroll;
  text-align: left;
  background: #ffffff;
  @include normal-link;

  table {
    width: 100%;

    td {
      padding: 0px 5px 0px 5px;
      border: none;
    }

    tr:nth-child(even) {
      background: rgb(225, 248, 240);
    }

    tr:nth-child(odd) {
      background: #ffffff;
    }

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 0.8em;
      color: #3cb371;
    }

    .feed-title {
      color: #fff;
      background-color: #aaa;
      font-size: 12px;
      padding: 2px 9px 2px 9px;
      border-radius: 14px;
      min-width: 150px;
    }
  }
}</style>
