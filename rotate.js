(function() {
    var rangeInput = document.getElementById("range-input");
    var rangeValue = document.getElementById("range-value");
    var wheel = document.getElementById("wheel")
// Print the range value to the output
    rangeInput.oninput = wheelUpdate;

    function wheelUpdate() {
        rangeValue.innerText = rangeInput.value-10; //Update the visual value
        wheel.style.transform = `rotate(${rangeInput.value}deg)`;
    }
})();
 