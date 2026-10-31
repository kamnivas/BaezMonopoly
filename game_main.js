//Using try&except to set local storage vars
try {
  let baez_bucks = localStorage.getItem('baez_bucks');
  let suspicion = localStorage.getItem('suspicion');
  let time_interval = localStorage.getItem('time_interval');
  let game_over = localStorage.getItem('game_over');
  let internet_fee = localStorage.getItem('internet_fee');
} catch (error) {
    localStorage.setItem('baez_bucks',10);
    localStorage.setItem('suspicion',0);
    localStorage.setItem('internet_fee',1);
    localStorage.setItem('game_over',false);
    localStorage.setItem('time_interval',0);
}
