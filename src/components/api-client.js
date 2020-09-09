export default class APIService {

  url_base = 'https://api.exchangeratesapi.io/latest?base=';
  
  async getresults(base) { 
    const response = await fetch(`${this.url_base}${base}`)
    return await response.json();
    };
}
