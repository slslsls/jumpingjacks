import React from 'react';
import { ReactComponent as Card2C } from '../../assets/2C.svg';
import { ReactComponent as Card2D } from '../../assets/2D.svg';
import { ReactComponent as Card2H } from '../../assets/2H.svg';
import { ReactComponent as Card2S } from '../../assets/2S.svg';
import { ReactComponent as Card3C } from '../../assets/3C.svg';
import { ReactComponent as Card3D } from '../../assets/3D.svg';
import { ReactComponent as Card3H } from '../../assets/3H.svg';
import { ReactComponent as Card3S } from '../../assets/3S.svg';
import { ReactComponent as Card4C } from '../../assets/4C.svg';
import { ReactComponent as Card4D } from '../../assets/4D.svg';
import { ReactComponent as Card4H } from '../../assets/4H.svg';
import { ReactComponent as Card4S } from '../../assets/4S.svg';
import { ReactComponent as Card5C } from '../../assets/5C.svg';
import { ReactComponent as Card5D } from '../../assets/5D.svg';
import { ReactComponent as Card5H } from '../../assets/5H.svg';
import { ReactComponent as Card5S } from '../../assets/5S.svg';
import { ReactComponent as Card6C } from '../../assets/6C.svg';
import { ReactComponent as Card6D } from '../../assets/6D.svg';
import { ReactComponent as Card6H } from '../../assets/6H.svg';
import { ReactComponent as Card6S } from '../../assets/6S.svg';
import { ReactComponent as Card7C } from '../../assets/7C.svg';
import { ReactComponent as Card7D } from '../../assets/7D.svg';
import { ReactComponent as Card7H } from '../../assets/7H.svg';
import { ReactComponent as Card7S } from '../../assets/7S.svg';
import { ReactComponent as Card8C } from '../../assets/8C.svg';
import { ReactComponent as Card8D } from '../../assets/8D.svg';
import { ReactComponent as Card8H } from '../../assets/8H.svg';
import { ReactComponent as Card8S } from '../../assets/8S.svg';
import { ReactComponent as Card9C } from '../../assets/9C.svg';
import { ReactComponent as Card9D } from '../../assets/9D.svg';
import { ReactComponent as Card9H } from '../../assets/9H.svg';
import { ReactComponent as Card9S } from '../../assets/9S.svg';
import { ReactComponent as CardTC } from '../../assets/TC.svg';
import { ReactComponent as CardTD } from '../../assets/TD.svg';
import { ReactComponent as CardTH } from '../../assets/TH.svg';
import { ReactComponent as CardTS } from '../../assets/TS.svg';
import { ReactComponent as CardJC } from '../../assets/JC.svg';
import { ReactComponent as CardJD } from '../../assets/JD.svg';
import { ReactComponent as CardJH } from '../../assets/JH.svg';
import { ReactComponent as CardJS } from '../../assets/JS.svg';
import { ReactComponent as CardQC } from '../../assets/QC.svg';
import { ReactComponent as CardQD } from '../../assets/QD.svg';
import { ReactComponent as CardQH } from '../../assets/QH.svg';
import { ReactComponent as CardQS } from '../../assets/QS.svg';
import { ReactComponent as CardKC } from '../../assets/KC.svg';
import { ReactComponent as CardKD } from '../../assets/KD.svg';
import { ReactComponent as CardKH } from '../../assets/KH.svg';
import { ReactComponent as CardKS } from '../../assets/KS.svg';
import { ReactComponent as CardAC } from '../../assets/AC.svg';
import { ReactComponent as CardAD } from '../../assets/AD.svg';
import { ReactComponent as CardAH } from '../../assets/AH.svg';
import { ReactComponent as CardAS } from '../../assets/AS.svg';

const _ = require('lodash');
const deck = [{ component: <Card2C />, cardId: "2C"}, { component: <Card2D />, cardId: "2D"}, { component: <Card2H />, cardId: "2H"}, { component: <Card2S />, cardId: "2S"}, { component: <Card3C />, cardId: "3C"}, { component: <Card3D />, cardId: "3D"}, { component: <Card3H />, cardId: "3H"}, { component: <Card3S />, cardId: "3S"}, { component: <Card4C />, cardId: "4C"}, { component: <Card4D />, cardId: "4D"}, { component: <Card4H />, cardId: "4H"}, { component: <Card4S />, cardId: "4S"}, { component: <Card5C />, cardId: "5C"}, { component: <Card5D />, cardId: "5D"}, { component: <Card5H />, cardId: "5H"}, { component: <Card5S />, cardId: "5S"}, { component: <Card6C />, cardId: "6C"}, { component: <Card6D />, cardId: "6D"}, { component: <Card6H />, cardId: "6H"}, { component: <Card6S />, cardId: "6S"}, { component: <Card7C />, cardId: "7C"}, { component: <Card7D />, cardId: "7D"}, { component: <Card7H />, cardId: "7H"}, { component: <Card7S />, cardId: "7S"}, { component: <Card8C />, cardId: "8C"}, { component: <Card8D />, cardId: "8D"}, { component: <Card8H />, cardId: "8H"}, { component: <Card8S />, cardId: "8S"}, { component: <Card9C />, cardId: "9C"}, { component: <Card9D />, cardId: "9D"}, { component: <Card9H />, cardId: "9H"}, { component: <Card9S />, cardId: "9S"}, { component: <CardTC />, cardId: "TC"}, { component: <CardTD />, cardId: "TD"}, { component: <CardTH />, cardId: "TH"}, { component: <CardTS />, cardId: "TS"}, { component: <CardJC />, cardId: "JC"}, { component: <CardJD />, cardId: "JD"}, { component: <CardJH />, cardId: "JH"}, { component: <CardJS />, cardId: "JS"}, { component: <CardQC />, cardId: "QC"}, { component: <CardQD />, cardId: "QD"}, { component: <CardQH />, cardId: "QH"}, { component: <CardQS />, cardId: "QS"}, { component: <CardKC />, cardId: "KC"}, { component: <CardKD />, cardId: "KD"}, { component: <CardKH />, cardId: "KH"}, { component: <CardKS />, cardId: "KS"}, { component: <CardAC />, cardId: "AC"}, { component: <CardAD />, cardId: "AD"}, { component: <CardAH />, cardId: "AH"}, { component: <CardAS />, cardId: "AS"}];

function getShuffledDeck(game) {
  let shuffledDeck = _.shuffle(deck);
  if (game === 'blackjack') {
    while (willGiveUser21(shuffledDeck)) {
      shuffledDeck = _.shuffle(shuffledDeck);
    }
  }
  return shuffledDeck;
}

function willGiveUser21(cards) {
  // todo: this logic isn't working
  const tenValueCards = ['T', 'J', 'Q', 'K'];
  return (
    (tenValueCards.includes(cards[1].cardId[0]) && cards[2].cardId[0] === 'A') ||
    (tenValueCards.includes(cards[2].cardId[0]) && cards[1].cardId[0] === 'A')
  );
}

export default getShuffledDeck;
