/**
 *
 * Timeago
 *
 * NOTE: Requires moment
 *
 * @param {String|Date|Number} timestamp
 * @return {String} e.g. 'a few seconds'
 *
 */
export default function timeAgo(timestamp) {
  let timeago;
  if (timestamp !== void 0) {
    const startDate = moment(timestamp);
    const endDate = moment(new Date);
    const ms = Math.abs(startDate.diff(endDate));
    const duration = moment.duration(ms).humanize();
    timeago = `${duration} (${ms / 1000}s)`;
  }
  return timeago;
}
