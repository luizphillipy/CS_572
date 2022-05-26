module.exports.mutiply = function(req,res){
    const numberOne=parseInt(req.params.numberOne, 10);
    console.log("numberOne: "+numberOne);
    let numberTwo=0;
    if(req.query && req.query.number){
        numberTwo=parseInt(req.query.number,10);
        console.log("numberTwo: "+numberTwo);
    }
    const multiplicaiton = numberOne*numberTwo;
    res.status(200).send("result of the multiplicaiton is: "+multiplicaiton);

}