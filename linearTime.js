/*Finding BigO of this code.BigO steps us how many steps 
takes in a function*/


const nemo=['nemo'];
const everyOne=['dory','bruce','marlin','nemo',
               'gill','bloat','nigel','squirt',
               'darla','hank'];
const large=new Array(1000).fill('nemo');
function findNemo(array){

  for(let i=0;i<array.length;i++){
    if(array[i]==="nemo"){
      console.log("Found Nemo!");
    }
  }
  
}
//findNemo(nemo);
findNemo(large);/*O(n)-->Linear Time.BigO depends upon 
number of fish in this case.As input increase number of 
operations increase*/