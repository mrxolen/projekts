let inputNumber = 0;

function clean() {
    if (inputNumber === 0) {
        document.inputa.texta.value = "";
        document.getElementById("result_area_span").innerHTML="";
    } else if (inputNumber === 1) {
        document.inputh.texth.value = "";
        document.getElementById("result_area_span").innerHTML="";
    }
}

function back() {
    if (inputNumber === 0) {
        var exp = document.inputa.texta.value;
        document.inputa.texta.value = exp.substring(0,exp.length-1);

    } else if (inputNumber === 1) {
        var exp = document.inputh.texth.value;
        document.inputh.texth.value = exp.substring(0,exp.length-1);
    }
}

function prevInput() {
    inputNumber = 0;
    console.log(inputNumber);
};

function nextInput() {
    inputNumber = 1;
    console.log(inputNumber);
};

function insert(num) {
    if (inputNumber === 0) {
        if (num === '.') {
            if (document.inputa.texta.value.indexOf('.') >= 0 || document.inputa.texta.value.length === 0) {
                alert('Neievadiet punktu kā pirmo rakstzīmi vai vairāk nekā vienu reizi!');
            } else {
                document.inputa.texta.value = 
                document.inputa.texta.value + num;  
            }
        } else {
            document.inputa.texta.value = 
            document.inputa.texta.value + num;
        }
    } else if (inputNumber === 1) {
        if (num === '.') {
            if (document.inputh.texth.value.indexOf('.') >= 0 || document.inputh.texth.value.length === 0) {
                alert('Neievadiet punktu kā pirmo rakstzīmi vai vairāk nekā vienu reizi!');
            } else {
                document.inputh.texth.value = 
                document.inputh.texth.value + num;  
            }
        } else {
            document.inputh.texth.value = 
            document.inputh.texth.value + num;
        }
    }
};

function equal() {
    var a = document.inputa.texta.value;
    var h = document.inputh.texth.value;
    var calcRes = (a/2)*h;
    document.getElementById("result_area_span").innerHTML=calcRes;
}