'use strict';

// Binary Overdose
import timeseriesScale from './timeseries-rescale.js';

const ts = [
  {price: 136, volume: 915, timestamp: 1553185760407},
  {price: 138, volume: 927, timestamp: 1553186162074},
  {price: 133, volume: 939, timestamp: 1553186590718},
  {price: 99,  volume: 954, timestamp: 1553186992591},
  {price: 118, volume: 967, timestamp: 1553187394423},
  {price: 191, volume: 878, timestamp: 1553187796286},
  {price: 174, volume: 888, timestamp: 1553188198235},
  {price: 169, volume: 897, timestamp: 1553188599999},
  {price: 171, volume: 908, timestamp: 1553189001822},
  {price: 176, volume: 918, timestamp: 1553189404479},
  {price: 151, volume: 926, timestamp: 1553189805550},
  {price: 164, volume: 936, timestamp: 1553190234146},
  {price: 201, volume: 948, timestamp: 1553190636076},
  {price: 204, volume: 959, timestamp: 1553191037836},
  {price: 188, volume: 867, timestamp: 1553191439680},
  {price: 170, volume: 874, timestamp: 1553191841616},
  {price: 181, volume: 885, timestamp: 1553192243495},
  {price: 173, volume: 893, timestamp: 1553192645252},
  {price: 174, volume: 900, timestamp: 1553193047259},
  {price: 191, volume: 909, timestamp: 1553193449149}
];

const item = {
  'cryptohub-price-history'           : ts,
  'cryptohub-price-history-min'       : 3490,
  'cryptohub-price-history-max'       : 4201,
  'cryptohub-volume-history-min'      : 12345678,
  'cryptohub-volume-history-max'      : 23456789,
  'cc-total-vol-full-PRICE'           : 4120,
  'cc-total-vol-full-TOTALVOLUME24HTO': 12346789,
  'cc-total-vol-full-PRICE-timestamp' : +new Date(),
};

console.log(JSON.stringify(timeseriesScale(item), null, 2));
