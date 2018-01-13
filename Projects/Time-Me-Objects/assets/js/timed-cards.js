// Card Class
/*
Creates a card object
Which can create a html fragment
And can count up/down (changing html as counting)
*/ 
class COUNTINGCARD{
    constructor(name, no, dir, downF = 0){
        this.name = name;
        this.no = no;
        this.dir = dir;
        this.downF = downF;
        this.time = dir === 'Down' ? downF : 0 ;
        this.running = false;
        this.timer = {};
    }

    startTime(){
        if(!this.running){
            this.timer = setInterval( ()=> { this.count(); }, 1000 );
            this.running = true;
        }
    }

    pauseTime(){
        clearInterval(this.timer);
        this.running = false;
    }

    resetTime(){
        this.pauseTime();
        this.time = this.downF || 0;
        $(`#card-${this.no} .card-count`).text(this.time);
    }

    count(){
        switch(this.dir){
            default:
            case 'Up':
                this.time++;
                $(`#card-${this.no} .card-count`).text(this.time);
                break;
            case 'Down':
                this.time = Math.max( this.time - 1 , 0);
                if( this.time === 0 ){ this.pauseTime(); }
                $(`#card-${this.no} .card-count`).text(this.time);
                break;
        }
    }
}

// Page Counters
/*
Object containing all counters for the page
Method 'addTimer' adds a timing object as a property 
*/
const PAGECOUNTERS = function(n = 0){
    this.numCounters = n;
}
PAGECOUNTERS.prototype.addTimer = function(name, dir, downF){
    const n = this.numCounters;
    this[n] = new COUNTINGCARD(name, n, dir, downF);
    this.numCounters++;

    $('.card-creator').parent().before( this.createCard( this[n] ) );
    $('.card-creator input[name="newName"').val(`My Timer ${n}`);
    $('.card-creator form')[0].reset(); 
    $('.card-down-from').addClass('hideme');
}

PAGECOUNTERS.prototype.createCard = function(timer){
    let v = `
    <div class="col-6 cols-sm-4">
        <div class="card card-counter card-${timer.dir}" id="card-${timer.no}">
            <div class="card-header">
                <h3>
                    <label class="sr-only">Timer Name</label>
                    <input type="text" name="timerName" value="${timer.name}">
                </h3>
                <button class="bt-del" data-action="delete">X</button>
            </div>
            <div class="card-body">
               <div class="card-block" id="${timer.no}">
                   <div class="card-title card-count">${timer.time}</div>
                   <div class="card-status">${timer.running? 'Counting ' + timer.dir : 'Paused' }</div>
                   <button class="btn bt-start" data-action="start">Start</button>
                   <button class="btn bt-stop" data-action="stop">Pause</button>
                   <button class="btn bt-restart" data-action="reset">Clear</button>
               </div>
            </div>
        </div><!--card-->
    </div><!--col-->`;
    return v; 
}

// Event Binding
$(document).ready(function(){
    const userPageTimers = new PAGECOUNTERS(0);
    userPageTimers.addTimer('My First Timer', 'Down', 30);


    $('.container')
        .on('click','.bt-start', function(){
            retrieveTimer(this).startTime();
        })
        .on('click','.bt-stop',function(){
            retrieveTimer(this).pauseTime();
        })
        .on('click','.bt-restart',function(){
            retrieveTimer(this).resetTime();
        })
        .on('click','.bt-del', function(){
            $(this).parentsUntil('.row').remove();
        });

    // Show/Hide "Down From" Seconds
    $('input[name="upOrDown"]').on('change', function(event){
        event.currentTarget.value === 'Up' ? 
        $('.card-down-from').addClass('hideme') :
        $('.card-down-from').removeClass('hideme') ;
    });

    // Add a Timer
    $('.bt-add').click(function(){
        userPageTimers.addTimer(
            $('.card-creator input[name="newName"]').val().trim(),
            $('.card-creator input[name="upOrDown"]').val().trim(),
            $('.card-creator input[name="downFromSec"]').val().trim()
        );
    });

    function retrieveTimer( i ){
        return userPageTimers[ $(i).parent().attr('id')];
    }
});