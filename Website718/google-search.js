const SerpApiSearch = require('./SerpApiSearch')

class NaverSearch extends SerpApiSearch {

  constructor(api_key) {
    super(api_key, "naver")
  }

  location(q, limit, callback) {
    throw "location is supported for: google-search" + this.engine ; 
  }
}

module.exports = NaverSearch

 

    
