
module.exports = {
formatDate: function(date){
  let eventDate = new Date(date);
  return eventDate.toLocaleString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
 }
};

        