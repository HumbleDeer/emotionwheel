/*jshint esversion: 6 */
(function() {
    var rangeInput = document.getElementById("range-input");
    // Print the range value to the output

    rangeInput.addEventListener("input", function(){
        wheelUpdate(rangeInput.value);
    });

    function wheelUpdate(wheelInput) {
        document.getElementById("range-value").innerText = wheelInput; //Update the visual value
        document.getElementById("wheel").style.transform = "rotate(" + wheelInput + "deg)";
    }
    document.getElementById("feeling-lucky").addEventListener("click", function() {
        //wheelUpdate(Math.random() * (360 - 0) - 180);
        var x = Math.ceil(Math.random() * (360 + 0)) - 180;
        wheelUpdate(x)        
        rangeInput.value = x;
    });
})();
