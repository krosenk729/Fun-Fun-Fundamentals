//https://onethingsimple.com/2014/03/how-to-create-a-javascript-timer-building-objects-using-recursion-and-closures/
//https://jsfiddle.net/krosenk729/yn4jjsgm/


// Card Class
/*
Creates a card object
Which can create a html fragment
And can count up/down (changing html as counting)
*/ 
class CountingCard{
    constructor(name, no, dir, downF = 0){
        this.name = name;
        this.no = no;
        this.dir = dir;
        this.downF = downF;
        this.time = downF || 0;
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
        this.time = downF || 0;
    }

    count(){
        switch(this.dir){
            case default:
            case 'Up':
                this.time++;
                $('#card-'+this.no+' .card-count').text(this.time);
                break;
            case 'Down':
                this.time = Math.max( this.time - 1 , 0);
                if( this.time===0 ){ this.pauseTime(); }
                $('#card-'+this.no+' .card-count').text(this.time);
                break;
        }
    }

    createCard(){
        let v = `
        <div class="col-6 cols-sm-4">
            <div class="card card-counter card-${this.dir}" id="card-${this.no}">
                <div class="card-header"><h3>${this.name}</h3></div>
                <div class="card-body">
                   <div class="card-block">
                       <div class="card-title card-count">30</div>
                       <div class="card-status">${this.running? 'Counting ' + this.dir : 'Paused' }</div>
                       <button class="btn bt-start">Start</button>
                       <button class="btn bt-stop">Pause</button>
                       <button class="btn bt-restart">Clear</button>
                   </div>
                </div>
            </div><!--card-->
        </div><!--col-->`;
        return v;        
    }
}

// Page Counters
/*
Object containing all counters 
Creates a new counter 
*/
var pageCounters = {
	numCounters: 1,
    addTimer: function(name, dir, downF){

        this['counter'+ this.pageCounters ] = new CardObj(name, this.pageCounters, dir, downF);

        $('.container').append( this['counter'+ this.pageCounters ].createCard() );
        
        this.numCounters++; 
    }
}



pageCounters['card-99'] = new CardObj('card-99', 99, 'Up', 0);

$('#card-99').on('click','.bt-start', function(){
	var c = $(this).parents('.card').attr('id');
	var d = pageCounters[c];
	console.log(typeof d.time);
	console.log(d.start);
	d.start();
});
