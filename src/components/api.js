const { getAllByDisplayValue } = require("@testing-library/react");

class ConverterAPI {
    url_base = 'https://api.exchangeratesapi.io/latest';

    async getresults() { 
        const res = await fetch(`${this.url_base}`);
        return await res.json();
}
}
const rwer = new ConverterAPI();
console.log(rwer.getresults());