export default function initFetchBTC() {
  const btcPreco = document.querySelector('.btc-preco');
  const url = 'https://blockchain.info/ticker';

  async function getBTCJSON() {
    try {
      const btc = await fetch(url);
      const btcJSON = await btc.json();
      const btcBRL = 1000 / btcJSON.BRL.buy;
      btcPreco.innerHTML = btcBRL.toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  getBTCJSON(url);
}
