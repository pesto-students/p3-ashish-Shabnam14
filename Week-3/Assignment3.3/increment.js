function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment, log];
}
const[increment, log] = createIncrement();
increment();
increment();
increment();
log();

//output
//Count is 0
//Reason
//As per encapsulation, the functions increment and log has to be referenced by createIncrement to get the desired output.
//since it was referenced, it didnt change the state of the counter and the value remained same.
