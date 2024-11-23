const axios = require('axios');

async function getPublicIP() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        console.log(`Seu IP público é: ${response.data.ip}`);
    } catch (error) {
        console.error('Erro ao obter o IP público:', error);
    }
}

getPublicIP();