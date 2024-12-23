const form=document.getElementById("fm");

form.addEventListener('submit', async function(event){

    event.preventDefault();

    const es= parseInt(document.getElementById("es").value);
    const ms=parseInt(document.getElementById("ms").value);
    const internal=parseInt(document.getElementById("internal").value);

    const marks=es+ms+internal;

    const display=document.getElementById("result");

    let cg=0;

    

        if(marks>=95){
            cg=10;
        }

        else if(marks>=85){
            cg=9;
        }

        else if(marks>=75){
            cg=8;
        }

        else if(marks>=65){
            cg=7;
        }

        else if(marks>=55){
            cg=6;
        }

        else{
            cg=5;
        }

        display.innerText=`Your CG in this course is ${cg}`;



    

    

})

