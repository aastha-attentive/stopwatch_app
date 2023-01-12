import {  useState } from "react";


function Stopwatch() {
    const [time,setTime] = useState({milis:0, sec:0, min:0, hrs:0});
    var hours=time.hrs, minutes=time.min, seconds=time.sec, miliseconds=time.milis;
    const [timer, setTimer]=useState();
    const [status,setStatus]=useState(0);

    const run=()=>{
        if(miliseconds<=99){
            miliseconds++;
        }
        if(miliseconds>99){
            seconds++;
            miliseconds=0;
        }
        if(seconds>59){
            minutes++;
            seconds=0;
        }
        if(minutes>59){
            hours++;
            minutes=0; 
        }
        return setTime({milis:miliseconds, sec:seconds, min:minutes, hrs:hours});
    }

    
    const start=()=>{
        run();
        setTimer(setInterval(run,10));
        setStatus(1);
    }
    const stop=()=>{
        clearInterval(timer);
        setStatus(2);
    }
    const reset=()=>{
        clearInterval();
        setTime({milis:0, sec:0, min:0, hrs:0});
        setStatus(0);
    }
    
    
    const resume= () => start();
 
    return (
      <div className="container">
            <div className="time">
            <h1>{time.hrs<10? "0"+time.hrs:time.hrs}:{time.min<10? "0"+time.min:time.min}:{time.sec<10? "0"+time.sec:time.sec}:{time.milis<10? "0"+time.milis:time.milis}</h1>
            </div>
            <div className="buttons">
                {(status===0)? <button onClick={start}>Start</button>:""}
                {(status===1)? <div className="btn"><button  onClick={stop}>Stop</button><button onClick={reset}>Reset</button></div> :""}
                {(status===2)? <div className="btn"><button  onClick={resume}>Resume</button><button onClick={reset}>Reset</button></div> :""}
            </div>
      </div>
    );
}
  
export default Stopwatch;