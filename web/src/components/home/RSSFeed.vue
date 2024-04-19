<template>
  <div class="feed">
    <table>
      <tbody>
        <tr v-for="item in feedItems" :key="item.guid">
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
  mounted() {
    this.fetchRSSFeeds();
  },
  methods: {
    async fetchRSSFeeds() {
      const requests = [
        "https://qiita.com/tyanmahou/feed",
        "https://mahou-ptr.hatenablog.com/rss",
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCWh2iVqxwFO30ik27gZmNAg",
        "https://feeds.soundcloud.com/users/soundcloud:users:152681006/sounds.rss"
      ].map(url =>
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
      );
      try {
        const responses = await axios.all(requests);

        for (let index = 0; index < responses.length; ++index) {
          const data = responses[index].data;

          // タイトル
          let feedTitle = data.feed.title;
          if (index == 2) {
            feedTitle += ' - Youtube';
          }
          // リンク
          let feedLink = data.feed.link;
          if (index == 0) {
            feedLink += 'tyanmahou'; // Qiitaのリンクがおかしいので暫定的にauthorを足してる;
          }
          const fixedData = data.items.map(item => {
              item.pubDateTokyo = moment.utc(item.pubDate, "YYYY-MM-DD HH:mm:ss").tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
              item.feedTitle = feedTitle;
              item.feedLink = feedLink;
              return item;
            });
            this.feedItems = this.feedItems.concat(fixedData);
        }
      } catch(error) {
        console.error('Error fetching RSS feeds:', error);
      }
      this.feedItems = this.feedItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)).slice(0,20);
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
