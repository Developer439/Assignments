
export function date_diff(date1,date2){
    const  dt1 = new Date(date1);
    const  dt2 = date2 ? new Date(date2) : new Date();
    const msec = dt1 - dt2;
    let secs,mins,hrs,days,yrs;
    // secs = mins = hrs = days = yrs = 0;
    // if(msec>0){
        secs = Math.floor( msec / 1000 )
        mins = Math.floor(secs / 60);
        hrs =  Math.floor(mins / 60);
        days = Math.floor(hrs / 24);
        yrs =  Math.floor(days / 365);
    // }
    const date_diff = { yrs, days, hrs, mins, secs}
    return date_diff;
}