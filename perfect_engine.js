function open_site() {
    window.open('https://sv.pokesol.com/calc', '_blank');
    window.open('https://sv.pokedb.tokyo/pokemon/list?season=25&rule=0', '_blank');
    window.open('https://pokemon-tools.netlify.app/speed-checker/', '_blank');   
    window.open('https://vclock.jp/のタイマー-20-分/', '_blank');
}

function open_timer() {
    window.open('https://vclock.jp/のタイマー-20-分/', '_blank'); 
}

let input_text, seach_url, seach_mode;
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'Enter') {
            seach_mode = document.getElementById('seach_mode').value;
            input_text = document.getElementById('engine_id').value
            if (seach_mode == 'Google') {
                seach_url = `https://www.google.com/search?q=${input_text}`;
            } else if (seach_mode == 'Youtube') {
                seach_url = `https://www.youtube.com/results?search_query=${input_text}`;
            } else if (seach_mode == 'Timer') {
                seach_url = `https://vclock.jp/のタイマー-${input_text}-分/`;
            }

            window.open(seach_url, '_blank');
        } 
    });
