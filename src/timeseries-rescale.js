'use strict';

import timeseriesThin   from './timeseries-thin';
import timeseriesPrune  from './timeseries-prune';
import timeseriesScale  from './timeseries-scale';

/**
 *
 * Timeseries Rescale
 *
 * @param {Array} ts - Array of timeseries objects
 * @return {Array} - Array of updated timeseries object
 *
 */
export default function timeseriesRescale(item, limit = 50, maxAge = 1000 * 60 * 60 * 24 * 7) {

  const price     = item['cc-total-vol-full-PRICE'];
  const volume    = item['cc-total-vol-full-TOTALVOLUME24HTO'];
  const ts        = item['cryptohub-price-history'];
  const minP      = item['cryptohub-price-history-min'] || price - 1;
  const maxP      = item['cryptohub-price-history-max'] || price;
  const minV      = item['cryptohub-volume-history-min'] || volume - 1;
  const maxV      = item['cryptohub-volume-history-max'] || volume;
  const timestamp = item['cc-total-vol-full-PRICE-timestamp'];

  timeseriesPrune(ts, maxAge);
  timeseriesThin(ts, limit);

  // scale up
  timeseriesScale({ts, min: minP, max: maxP, scaleField: 'price'});
  timeseriesScale({ts, min: minV, max: maxV, scaleField: 'volume'});

  // add item
  const last = ts[ts.length - 1];
  const next = {price, volume, timestamp: +new Date(timestamp)};
  if (JSON.stringify(last) !== JSON.stringify(next)) ts.push(next);

  // scale down
  timeseriesScale({ts, min: 0, max: 1000, scaleField: 'price'});
  timeseriesScale({ts, min: 0, max: 1000, scaleField: 'volume'});

  // return {
  //   timeseries: tsArr,
  //   priceMin: newPriceMin,
  //   priceMax: newPriceMax,
  //   volumeMin: newVolMin,
  //   volumeMax: newVolMax,
  // };

}
