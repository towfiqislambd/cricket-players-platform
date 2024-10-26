import './App.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header'
import Banner from './components/Banner'
import AvailablePlayers from './components/available_players/Available_players';
import SelectedPlayers from './components/selected_players/Selected_players'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


function App() {
  const notify = () => toast.success('Credit Added to your Account', {
    position: "top-center",
    autoClose: 2000,
  })
  const notify2 = () => toast.error('Not Enough Money to buy this player. Claim Some Credit', {
    position: "top-center",
    autoClose: 2000,
  })
  const notify3 = (players) => toast.success(`Congrats!! ${players.player_name} is now in your squad`, {
    position: "top-center",
    autoClose: 2000,
  })
  const notify4 = () => toast.warn(`Player Removed`, {
    position: "top-right",
    autoClose: 2000,
  })
  const notify5 = () => toast.error('Player Already Selected', {
    position: "top-center",
    autoClose: 2000,
  })
  const notify6 = () => toast.error("You can't select more than 6 players. Already 6 players have been added", {
    position: "top-center",
    autoClose: 2000,
  })

  // Handler For Claim Free Credit Button
  const [coin, setCoin] = useState(600000);
  const handleClaimFreeCredit = () => {
    notify();
    const newCoin = coin + 600000;
    setCoin(newCoin)
    document.getElementById('coin').innerText = coin;
  }

  // Handler For Available & Selected Btn
  const [choosePlayers, setChoosePlayer] = useState([]);
  const handleRemovedSelectedPlayers = player => {
    notify4()
    const removedPlayer = choosePlayers.filter(removePlayer => player.playerid !== removePlayer.playerid);
    setChoosePlayer(removedPlayer)
  }

  // Handler For Choose Player Btn
  const handleChoosePlayer = players => {
    if (choosePlayers.includes(players)) {
      return notify5()
    }
    else {
      if (players.bidding_price > document.getElementById('coin').innerText) {
        return notify2()
      }
      else {
        const newPlayers = [...choosePlayers, players];
        if (newPlayers.length > 6) {
          return notify6()
        }
        else {
          notify3(players)
          setChoosePlayer(newPlayers)
          const remainingCoin = document.getElementById('coin').innerText - players.bidding_price
          document.getElementById('coin').innerText = remainingCoin
        }
      }
    }
  }

  // Handler For Active Btn
  const [activeBtn, setActiveBtn] = useState(null);
  const handleActiveBtn = btn => {
    setActiveBtn(btn);
  }

  return (
    <div>
      <ToastContainer />
      <Header></Header>
      <div className='container mx-auto px-20'>
        <Banner handleClaimFreeCredit={handleClaimFreeCredit}></Banner>
        <AvailablePlayers activeBtn={activeBtn} handleActiveBtn={handleActiveBtn} handleChoosePlayer={handleChoosePlayer} choosePlayers={choosePlayers}></AvailablePlayers>
        <SelectedPlayers activeBtn={activeBtn} handleRemovedSelectedPlayers={handleRemovedSelectedPlayers} choosePlayers={choosePlayers} handleActiveBtn={handleActiveBtn}></SelectedPlayers>
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App