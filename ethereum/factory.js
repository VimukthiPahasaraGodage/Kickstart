import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x203643B258dB099f9A2c8B0036003eb227C78352'
);

export default instance;
