function calc() {
    var vf = parseInt(+document.querySelector('#value1').value);
    var vs = parseInt(+document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == 'add') {
        calculate = vf + vs;
    } else if (op == 'min') {
        calculate = vf - vs;
    } else if (op == 'div' ) {
        calculate = vf / vs;
    } else if (op == 'mul') {
        calculate = vf * vs;
    }
    document.querySelector("#result").innerHTML = calculate;
}