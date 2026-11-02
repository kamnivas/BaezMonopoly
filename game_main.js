// Main items that help the game run
if (localStorage.getItem('baez_bucks') === null){
  localStorage.setItem('baez_bucks',10);
  var baez_bucks = 10;
} else {
  var baez_bucks = localStorage.getItem('baez_bucks');
}

if (localStorage.getItem('suspicion') === null){
  localStorage.setItem('suspicion',0);
  var suspicion = 0;
} else {
  var suspicion = localStorage.getItem('suspicion');
}

if (localStorage.getItem('time_interval') === null){
  localStorage.setItem('time_interval',0);
  var time_interval = 0;
} else {
  var time_interval = localStorage.getItem('time_interval');
}

if (localStorage.getItem('combat_won') === null){
  localStorage.setItem('combat_won',false);
  var combat_won = false;
} else {
  var combat_won = localStorage.getItem('combat_won');
}

if (localStorage.getItem('game_over') === null){
  localStorage.setItem('game_over',false);
  var game_over = false;
} else {
  var game_over = localStorage.getItem('game_over');
}

if (localStorage.getItem('internet_fee') === null){
  localStorage.setItem('internet_fee',1);
  var internet_fee = 1;
} else {
  var internet_fee = localStorage.getItem('internet_fee');
}
