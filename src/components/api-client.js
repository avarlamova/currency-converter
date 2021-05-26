export default class APIService {
  key = 'e6b8a6e381ee1b2a1cd7';
  url_base = 'https://free.currconv.com/api/v7/convert?q';
  
  async getresults(base,target) { 
    const response = await fetch(`${this.url_base}=${base}_${target}&compact=ultra&apiKey=${this.key}`);
    return await response.json();
    };
}

//https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=e6b8a6e381ee1b2a1cd7
