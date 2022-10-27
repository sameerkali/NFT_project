import React, { useEffect, useState } from 'react';
import './App.css';
// import CollectionCard from './Components/CollectionCard';
import Header from './Components/Header';
import axios from 'axios';
import PunkList from './Components/PunkList';
import Main from './Components/Main';

function App() {

  const [PunkListData, setPunkListData] = useState([]);
  const [selectPunk, setSelectPunk] = useState(0);

  useEffect(() => {
    function fetchData() {
      const getMyNft = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0xFe07DAB5852149c33428952e69E54A94c6e56d0d&order_direction=asc'
          // 'https://testnets-api.opensea.io/assets?asset_contract_address=0xC52d6016Ac52eFa3E90a83894963028f0f5288DE&order_direction=asc'
          // 'https://testnets-api.opensea.io/assets?asset_contract_address=0xDe6d3BDDA5d25b8676d101E3aAfF535B781fc8f9&order_direction=asc'

        )
        console.log(openseaData.data.assets);
        setPunkListData(openseaData.data.assets);
      }
      return getMyNft();
    }
    fetchData()
  }, []);

  // console.log(selectPunk, "🚀❤❤🚀❤🚀❤🚀")


  return (

    <div className='app'>
      <Header />
      {PunkListData.length > 0 && (
          <>  
          <Main PunkListData={PunkListData} selectPunk={selectPunk}/>
          <PunkList  PunkListData={PunkListData} setSelectPunk={setSelectPunk}/>
          </>
        )}
    </div>
  );
}

export default App;
