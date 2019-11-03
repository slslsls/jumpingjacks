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
const deck = [<Card2C key="2C"/>, <Card2D key="2D"/>, <Card2H key="2H"/>, <Card2S key="2S"/>, <Card3C key="3C"/>, <Card3D key="3D"/>, <Card3H key="3H"/>, <Card3S key="3S"/>, <Card4C key="4C"/>, <Card4D key="4D"/>, <Card4H key="4H"/>, <Card4S key="4S"/>, <Card5C key="5C"/>, <Card5D key="5D"/>, <Card5H key="5H"/>, <Card5S key="5S"/>, <Card6C key="6C"/>, <Card6D key="6D"/>, <Card6H key="6H"/>, <Card6S key="6S"/>, <Card7C key="7C"/>, <Card7D key="7D"/>, <Card7H key="7H"/>, <Card7S key="7S"/>, <Card8C key="8C"/>, <Card8D key="8D"/>, <Card8H key="8H"/>, <Card8S key="8S"/>, <Card9C key="9C"/>, <Card9D key="9D"/>, <Card9H key="9H"/>, <Card9S key="9S"/>, <CardTC key="TC"/>, <CardTD key="TD"/>, <CardTH key="TH"/>, <CardTS key="TS"/>, <CardJC key="JC"/>, <CardJD key="JD"/>, <CardJH key="JH"/>, <CardJS key="JS"/>, <CardQC key="QC"/>, <CardQD key="QD"/>, <CardQH key="QH"/>, <CardQS key="QS"/>, <CardKC key="KC"/>, <CardKD key="KD"/>, <CardKH key="KH"/>, <CardKS key="KS"/>, <CardAC key="AC"/>, <CardAD key="AD"/>, <CardAH key="AH"/>, <CardAS key="AS"/>];

function getShuffledDeck(game) {
  const shuffledDeck = _.shuffle(deck);
  if (game === 'blackjack') {
    shuffledDeck[1] = <DownCard key="downcard" />
  }
  return shuffledDeck;
}

export default getShuffledDeck;
