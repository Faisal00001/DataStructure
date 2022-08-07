/*Finding BigO of this code.BigO steps us how many steps 
takes in a function*/


const nemo=['nemo'];
const everyOne=['dory','bruce','marlin','nemo',
               'gill','bloat','nigel','squirt',
               'darla','hank'];
const large=new Array(1000).fill('nemo');
function findNemo(array){
  let t0=performance.now();
  for(let i=0;i<array.length;i++){
    if(array[i]==="nemo"){
      console.log("Found Nemo!");
    }
  }
  let t1=performance.now();
  console.log("Nemo function took "+(t1-t0)+" milisecods");
}
//findNemo(nemo);
findNemo(large);