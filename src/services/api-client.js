export default class APIService {
    api_key = '8a507c684b08fea1831767202a72daea';
    url_base = 'http://apilayer.net/api/live';
  
    async getresults(url) { 
        const response = await fetch('http://apilayer.net/api/live?access_key=8a507c684b08fea1831767202a72daea&currencies=EUR&source=USD')
      //const response = await fetch(`${this.url_base}'?access_key='${this.api_key}'&currencies=${this.currency}'&source=${this.sourcs}`);
      return await response.json();
    };
  
    /*
    async getAUD () {
      const res = await this.getresults();
      return res.rates.AUD;
    };
  
    async getCAD () {
      const res = await this.getresults();
      return res.rates.CAD;
    };  
  
    async getHKD () {
      const res = await this.getresults();
      return res.rates.HKD;
    };
    */
}
