
let baez_bucks;
let suspicion;
let time_interval;
let internet_fee;
let game_over;

if (localStorage.getItem('baez_bucks') === null) {
    localStorage.setItem('baez_bucks', 10);
    baez_bucks = 10;
} else {
    baez_bucks = Number(localStorage.getItem('baez_bucks'));
}

if (localStorage.getItem('suspicion') === null) {
    localStorage.setItem('suspicion', 0);
    suspicion = 0;
} else {
    suspicion = Number(localStorage.getItem('suspicion'));
}

if (localStorage.getItem('time_interval') === null) {
    localStorage.setItem('time_interval', 0);
    time_interval = 0;
} else {
    time_interval = Number(localStorage.getItem('time_interval'));
}

if (localStorage.getItem('internet_fee') === null) {
    localStorage.setItem('internet_fee', 1);
    internet_fee = 1;
} else {
    internet_fee = Number(localStorage.getItem('internet_fee'));
}

if (localStorage.getItem('game_over') === null) {
    localStorage.setItem('game_over', false);
    game_over = false;
} else {
    game_over = (localStorage.getItem('game_over') === 'true');
}
