var problem = "0";
document.getElementById("result").innerHTML = 0;
document.getElementById("result").style.overflow = "hidden";
document.addEventListener("keydown", function(e) {
    let key = e.key;
    


    switch(key) {
        case '1':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '2':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '3':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '4':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '5':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '6':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '7':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '8':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '9':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '0':
            if (problem == '0') {
                problem = '';
            }
            problem = problem + key;
            document.getElementById("result").innerHTML = problem;
            break;
        case '.':
            if (problem.charAt(problem.length - 1) != key) {
                problem = problem + key;
            }            
            document.getElementById("result").innerHTML = problem;
            break;
        case '+':
            if (problem.charAt(problem.length - 1) == '+' ) {
                problem = problem.slice(0, -1) + '+';
            }
            else if (problem.charAt(problem.length - 1) == '-' ) {
                problem = problem.slice(0, -1);
                if (problem.charAt(problem.length - 1) == '+' ) {
                    problem = problem.slice(0, -1);
                }    
                problem = problem + '+';
            }
            else if (problem.charAt(problem.length - 1) == '/' ) {
                problem = problem.slice(0, -1) + '-';
            }
            else if (problem.charAt(problem.length - 1) != '*' ) {
                problem = problem + '+';
            }
            document.getElementById("result").innerHTML = problem;
            break;
        case '-':
            if (problem.charAt(problem.length - 1) != key) {
                problem = problem + key;
            }
            document.getElementById("result").innerHTML = problem;
            break;
        case '*':
            if (problem.charAt(problem.length - 1) == '+' ) {
                problem = problem.slice(0, -1) + '*';
            }
            else if (problem.charAt(problem.length - 1) == '-' ) {
                problem = problem.slice(0, -1);
                if (problem.charAt(problem.length - 1) == '+' ) {
                    problem = problem.slice(0, -1);
                }    
                problem = problem+ '*';
            }
            else if (problem.charAt(problem.length - 1) == '/' ) {
                problem = problem.slice(0, -1) + '*';
            }
            else if (problem.charAt(problem.length - 1) != '*' ) {
                problem = problem + '*';
            }
            document.getElementById("result").innerHTML = problem;
            break;
        case '/':
            if (problem.charAt(problem.length - 1) == '+' ) {
                problem = problem.slice(0, -1) + '/';
            }
            else if (problem.charAt(problem.length - 1) == '-' ) {
                problem = problem.slice(0, -1);
                if (problem.charAt(problem.length - 1) == '/' ) {
                    problem = problem.slice(0, -1);
                }    
                problem = problem+ '/';
            }
            else if (problem.charAt(problem.length - 1) == '*' ) {
                problem = problem.slice(0, -1) + '/';
            }
            else if (problem.charAt(problem.length - 1) != '/' ) {
                problem = problem + '/';
            }
            document.getElementById("result").innerHTML = problem;
            break;
        case '=':
            document.getElementById("result").innerHTML = eval(problem);
            problem = String(eval(problem));
            break;
        case 'Enter':
            document.getElementById("result").innerHTML = eval(problem);
            problem = String(eval(problem));
            break;
        case 'c':
            problem = "0";
            document.getElementById("result").innerHTML = problem;
            break;
        case 'C':
            problem = "0";
            document.getElementById("result").innerHTML = problem;
            break;
        case "Backspace":
            console.log(problem);
            if (typeof problem == "number"){
                problem = String(problem);
            }
            problem = problem.slice(0, -1);
            document.getElementById("result").innerHTML = problem;
            break;
        default:
            console.log("you poop");
    }

});

function _1() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '1';
    document.getElementById("result").innerHTML = problem;
}
function _2() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '2';
    document.getElementById("result").innerHTML = problem;
}
function _3() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '3';
    document.getElementById("result").innerHTML = problem;
}
function _4() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '4';
    document.getElementById("result").innerHTML = problem;
}
function _5() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '5';
    document.getElementById("result").innerHTML = problem;
}
function _6() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '6';
    document.getElementById("result").innerHTML = problem;
}
function _7() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '7';
    document.getElementById("result").innerHTML = problem;
}
function _8() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '8';
    document.getElementById("result").innerHTML = problem;
}
function _9() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '9';
    document.getElementById("result").innerHTML = problem;
}
function _0() {
    if (problem == '0') {
        problem = '';
    }
    problem = problem + '0';
    document.getElementById("result").innerHTML = problem;
}
function _decimal() {
    if (problem.charAt(problem.length - 1) != '.' ) {
        problem = problem + '.';
    }
    document.getElementById("result").innerHTML = problem;
}
function _sum() {
    if (problem.charAt(problem.length - 1) == '+' ) {
        problem = problem.slice(0, -1) + '+';
    }
    else if (problem.charAt(problem.length - 1) == '-' ) {
        problem = problem.slice(0, -1);
        if (problem.charAt(problem.length - 1) == '+' ) {
            problem = problem.slice(0, -1);
        }    
        problem = problem + '+';
    }
    else if (problem.charAt(problem.length - 1) == '/' ) {
        problem = problem.slice(0, -1) + '-';
    }
    else if (problem.charAt(problem.length - 1) != '*' ) {
        problem = problem + '+';
    }
    document.getElementById("result").innerHTML = problem;
}
function _sub() {
    if (problem.charAt(problem.length - 1) != '-' ) {
        problem = problem + '-';
    }
    document.getElementById("result").innerHTML = problem;
}
function _mul() {
    if (problem.charAt(problem.length - 1) == '+' ) {
        problem = problem.slice(0, -1) + '*';
    }
    else if (problem.charAt(problem.length - 1) == '-' ) {
        problem = problem.slice(0, -1);
        if (problem.charAt(problem.length - 1) == '+' ) {
            problem = problem.slice(0, -1);
        }    
        problem = problem+ '*';
    }
    else if (problem.charAt(problem.length - 1) == '/' ) {
        problem = problem.slice(0, -1) + '*';
    }
    else if (problem.charAt(problem.length - 1) != '*' ) {
        problem = problem + '*';
    }
    document.getElementById("result").innerHTML = problem;
}
function _div() {
    if (problem.charAt(problem.length - 1) == '+' ) {
        problem = problem.slice(0, -1) + '/';
    }
    else if (problem.charAt(problem.length - 1) == '-' ) {
        problem = problem.slice(0, -1);
        if (problem.charAt(problem.length - 1) == '/' ) {
            problem = problem.slice(0, -1);
        }    
        problem = problem+ '/';
    }
    else if (problem.charAt(problem.length - 1) == '*' ) {
        problem = problem.slice(0, -1) + '/';
    }
    else if (problem.charAt(problem.length - 1) != '/' ) {
        problem = problem + '/';
    }
    document.getElementById("result").innerHTML = problem;
}
function _ac() {
    problem = "0";
    document.getElementById("result").innerHTML = problem;
}
function _c() {
    if (typeof problem == "number"){
        problem = String(problem);
    }
    if (problem != '0'){
        problem = problem.slice(0, -1);
        document.getElementById("result").innerHTML = problem;
    }
    if (problem == '') {
        problem = "0";
        document.getElementById("result").innerHTML = problem;
    }
}
function _sqrt() {
    problem = String(Math.sqrt(eval(problem)));
    if (problem == 'NaN'){
        problem = 'Error';
        document.getElementById("result").innerHTML = problem;
        problem = '0';
    
    }
    else {
        document.getElementById("result").innerHTML = problem;
    }
}
function _enter() {
    document.getElementById("result").innerHTML = eval(problem);
    problem = String(eval(problem));
}

function _sin() {
    document.getElementById("result").innerHTML = Math.sin(problem * Math.PI / 180);
    problem = String(eval(problem));
}
function _cos() {
    document.getElementById("result").innerHTML = Math.cos(problem * Math.PI / 180);
    problem = String(eval(problem));
}
function _tan() {
    document.getElementById("result").innerHTML = Math.tan(problem * Math.PI / 180);
    problem = String(eval(problem));
}






(function($) {
    $.fn.nodoubletapzoom = function() {
        $(this).bind('touchstart', function preventZoom(e) {
          var t2 = e.timeStamp
            , t1 = $(this).data('lastTouch') || t2
            , dt = t2 - t1
            , fingers = e.originalEvent.touches.length;
          $(this).data('lastTouch', t2);
          if (!dt || dt > 500 || fingers > 1) return; // not double-tap
  
          e.preventDefault(); // double tap - prevent the zoom
          // also synthesize click events we just swallowed up
          $(this).trigger('click').trigger('click');
        });
    };
  });

function copyresult() {
    navigator.clipboard.writeText(problem);
}





