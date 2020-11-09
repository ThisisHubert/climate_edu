<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h2><b>Welcome to Climate TALK! </b></h2>
            <p>
              Your primary resource for searching the right information about
              Climate Change
            </p>
            <hr />
            <h4>Here are your recent activities!</h4>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/dashboard.svg"
              alt=""
              class="img-fluid"
              width="500"
            />
          </div>
        </div>
        Section for News API
        <!-- news api  -->
        <div class="container">
          <div class="searchbar">
            <form @submit.prevent="fetchSearchNews">
              <input type="text" placeholder="search..." v-model="searchword" />
            </form>
            <div class="search-icons">
              <i
                v-if="!isBusy"
                class="fas fa-search"
                @click="fetchSearchNews"
              ></i>
              <i v-else class="fas fa-spinner fa-spin"></i>
              <i class="fas fa-times" @click="fetchTopNews"></i>
            </div>
          </div>
          <div class="result-list">
            <article
              v-for="(article, index) in articles"
              :key="index"
              @click="navTo(article.url)"
            >
              <header>
                <img
                  v-if="article.urlToImage"
                  :src="article.urlToImage"
                  alt=""
                />
                <i v-else class="fas fa-image"></i>
              </header>
              <section v-html="article.title"></section>
              <footer>
                <i class="fas fa-chevron-right"></i>
              </footer>
            </article>
          </div>
          <div ref="infinitescrolltrigger" id="scroll-trigger">
            <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
          </div>
        </div>
        <!-- news api -->
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";
export default {
  name: "Overview",

  data: () => {
    return {
      apiUrl: "",
      apiKey: "d9045a056465436bb7864f5007d27c22",
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 10,
      searchword: "",
      articles: [],
      country: "us",
    };
  },
  computed: {
      pageCount() {
        return Math.ceil(this.totalResults/this.maxPerPage);
      }
    },

  methods: {
      navTo(url) {
        window.open(url);
      },
      resetData() {
        this.currentPage = 1;
        this.articles = [];
      },
      fetchSearchNews() {
        if(this.searchword !== '')
        {
          this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
          this.isBusy = true;
          this.resetData();
          this.fetchData();
        }
        else {
          this.fetchTopNews();
        }
      },
      fetchTopNews() {
        this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=' + this.country +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
        this.isBusy = true;
        this.searchword = '';
        
        this.resetData();
        this.fetchData();
      },
      fetchData() {
        let req  = new Request(this.apiUrl + '&page=' + this.currentPage);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(element => {
              this.articles.push(element);
            });
            this.isBusy = false;
            this.showloader = false;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
              this.showloader = true;
              this.currentPage += 1;
              this.fetchData();
            }
          });
        });
        observer.observe(this.$refs.infinitescrolltrigger);
      }
    },
    created() {
      this.fetchTopNews();
    },
    mounted() {
      this.scrollTrigger();
    }
  
};
</script>
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

<style scoped lang="scss">
.search-box {
  width: 80%;
  margin-bottom: 30px;
  margin-left: 100px;
}

body {
  font-family: "montserrat", sans-serif;
   margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #80A248, #198B4D);
}


main {
  min-height: 100vh;
  padding: 25px;
  //   background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box .search-bar {
  display: block;
  width: 50%;
  padding: 15px;

  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: black;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: black;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: greenyellow;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: black;
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: black;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.container {
    position: relative;


    .searchbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60px;
      font-size: 1.6rem;
      input {
        padding: 0 100px 0 20px;
        margin: 0;
        width: calc(100% - 120px);
        height: 60px;
        border: none;
        font-size: 2rem;
        color: #fff;
        background-color: #222;
        &:focus {
          outline: none;
        }
      }
      .search-icons {
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        i {
          margin-left: 15px;
          cursor: pointer;
        }
      }
    }
    .result-list {
      padding-top: 60px;
    }
    article {
      display: grid;
      grid-template-columns: 200px auto 40px;
      grid-template-rows: 100px;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      cursor: pointer;
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          max-width: 100%;
          height: auto;
        }
        i {
          font-size: 2rem;
        }
      }
      section {
        margin: 0;
        padding: 10px;
        height: 100px;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #888;
      }
    }
    #scroll-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      font-size: 1.6rem;
    }
  }






</style>
