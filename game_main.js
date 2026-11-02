//Main items that help the game run
if (localStorage.getItem('baez_bucks') === null){
  localStorage.setItem('baez_bucks',10);
} else {
  let baez_bucks = localStorage.getItem('baez_bucks');
}

if (localStorage.getItem('suspicion') === null){
  localStorage.setItem('suspicion',0);
} else {
  let suspicion = localStorage.getItem('suspicion');
}

if (localStorage.getItem('time_interval') === null){
  localStorage.setItem('time_interval',0);
} else {
  let time_interval = localStorage.getItem('time_interval');
}

if (localStorage.getItem('game_over') === null){
  localStorage.setItem('game_over',false);
} else {
  let game_over = localStorage.getItem('game_over');
}

if (localStorage.getItem('internet_fee') === null){
  localStorage.setItem('internet_fee',1);
} else {
  let internet_fee = localStorage.getItem('internet_fee');
}
