function checkForm() {
    var a = document.getElementById('username').value;
    var b = document.getElementById('l_name').value;
    var c = document.getElementById('father').value;
    var d = document.getElementById('cnic').value;
    var e = document.getElementById('mobil').value;
    var f = document.getElementById('designation').value;
    var g = document.getElementById('department').value;
    var h = document.getElementById('files').value;
    var i = document.getElementById('email').value;
    var x = document.getElementById('Expire').value;
    var radiobtn = document.querySelector('input[name="Gender"]:checked');

    var atposition = i.indexOf("@");  
    var dotposition = i.lastIndexOf(".");  

    if (a === "" || b === "" || c === "" || d === "" || e === "" || f === "" || g === "" || x === "" || h === "" || !radiobtn || !radiobtn.value) {
        alert("All Fields are Mandatory");
        return false;
    } else if (isNaN(d)) {
        alert("ID card! Only numbers are allowed!");
        return false;
    } else if (isNaN(e)) {
        alert("Mobile! Only numbers are allowed!");
        return false;
    } else if (d.length !== 13) {
        alert("ID card number must be thirteen digits");
        return false;
    } else if (e.length !== 11) {
        alert("Mobile number must be eleven digits");
        return false;
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= i.length) {  
        alert("Please enter a valid e-mail address\natposition: " + atposition + "\ndotposition: " + dotposition);  
        return false;  
    } else {
        return true;
    }
}

var form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkForm()) {
        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);
        const json = JSON.stringify(obj); 
    
        localStorage.setItem('form', json);
    
        window.location.href = "report.html";
    }
});
