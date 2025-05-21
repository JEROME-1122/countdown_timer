  function counterTimer(){
         const date =document.querySelector("#date");
        const hour =document.querySelector("#hour");
        const minutes =document.querySelector("#minutes");
        const second =document.querySelector("#second");

        const  currentYear=new Date().getFullYear();
        const nextYear= new Date(`January 1 ${currentYear+1} 00:00:00`);
     
        const currentDate= new Date();
        const findDate=nextYear-currentDate;
        const d=Math.floor(findDate/1000/60/60/24);
        const h=Math.floor((findDate/1000/60/60)%24);
        const m=Math.floor((findDate/1000/60)%60);
        const s=Math.floor((findDate/1000)%60);
        date.innerHTML=d<10?"0"+d:d;
        hour.innerHTML=h<10?"0"+h:h;
        minutes.innerHTML=m<=10?"0"+m:m;
        second.innerHTML=s<=10?"0"+s:s;
       }
       setInterval(counterTimer,1000)