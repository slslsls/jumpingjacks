import React from 'react';
import { ReactComponent as DownCard } from '../../assets/downcard.svg';
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
const deck = [{ component: <Card2C key="2C"/>, cardId: "2C"}, { component: <Card2D key="2D"/>, cardId: "2D"}, { component: <Card2H key="2H"/>, cardId: "2H"}, { component: <Card2S key="2S"/>, cardId: "2S"}, { component: <Card3C key="3C"/>, cardId: "3C"}, { component: <Card3D key="3D"/>, cardId: "3D"}, { component: <Card3H key="3H"/>, cardId: "3H"}, { component: <Card3S key="3S"/>, cardId: "3S"}, { component: <Card4C key="4C"/>, cardId: "4C"}, { component: <Card4D key="4D"/>, cardId: "4D"}, { component: <Card4H key="4H"/>, cardId: "4H"}, { component: <Card4S key="4S"/>, cardId: "4S"}, { component: <Card5C key="5C"/>, cardId: "5C"}, { component: <Card5D key="5D"/>, cardId: "5D"}, { component: <Card5H key="5H"/>, cardId: "5H"}, { component: <Card5S key="5S"/>, cardId: "5S"}, { component: <Card6C key="6C"/>, cardId: "6C"}, { component: <Card6D key="6D"/>, cardId: "6D"}, { component: <Card6H key="6H"/>, cardId: "6H"}, { component: <Card6S key="6S"/>, cardId: "6S"}, { component: <Card7C key="7C"/>, cardId: "7C"}, { component: <Card7D key="7D"/>, cardId: "7D"}, { component: <Card7H key="7H"/>, cardId: "7H"}, { component: <Card7S key="7S"/>, cardId: "7S"}, { component: <Card8C key="8C"/>, cardId: "8C"}, { component: <Card8D key="8D"/>, cardId: "8D"}, { component: <Card8H key="8H"/>, cardId: "8H"}, { component: <Card8S key="8S"/>, cardId: "8S"}, { component: <Card9C key="9C"/>, cardId: "9C"}, { component: <Card9D key="9D"/>, cardId: "9D"}, { component: <Card9H key="9H"/>, cardId: "9H"}, { component: <Card9S key="9S"/>, cardId: "9S"}, { component: <CardTC key="TC"/>, cardId: "TC"}, { component: <CardTD key="TD"/>, cardId: "TD"}, { component: <CardTH key="TH"/>, cardId: "TH"}, { component: <CardTS key="TS"/>, cardId: "TS"}, { component: <CardJC key="JC"/>, cardId: "JC"}, { component: <CardJD key="JD"/>, cardId: "JD"}, { component: <CardJH key="JH"/>, cardId: "JH"}, { component: <CardJS key="JS"/>, cardId: "JS"}, { component: <CardQC key="QC"/>, cardId: "QC"}, { component: <CardQD key="QD"/>, cardId: "QD"}, { component: <CardQH key="QH"/>, cardId: "QH"}, { component: <CardQS key="QS"/>, cardId: "QS"}, { component: <CardKC key="KC"/>, cardId: "KC"}, { component: <CardKD key="KD"/>, cardId: "KD"}, { component: <CardKH key="KH"/>, cardId: "KH"}, { component: <CardKS key="KS"/>, cardId: "KS"}, { component: <CardAC key="AC"/>, cardId: "AC"}, { component: <CardAD key="AD"/>, cardId: "AD"}, { component: <CardAH key="AH"/>, cardId: "AH"}, { component: <CardAS key="AS"/>, cardId: "AS"}];

function getShuffledDeck(game) {
  const shuffledDeck = _.shuffle(deck);
  if (game === 'blackjack') {
    while ()
    shuffledDeck[1] = { component: <DownCard key="downcard" />, cardId: "DownCard" };
  }
  return shuffledDeck;
}

export default getShuffledDeck;
