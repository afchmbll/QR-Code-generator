let code = false

function generator(){
    if (document.getElementById("link").value===""){
        return alert("Enter link first")
    }
    if (code===true){
        return alert("There's already a QRCode")
    }
    new QRCode(document.getElementById("qrcode"), document.getElementById("link").value)
    code=true
    
}

function reset(){
    document.getElementById("qrcode").innerHTML = ""
    document.getElementById("link").value = ""  
    code=false  
}

function download() {
    if (document.getElementById("qrcode").innerHTML === ""){
        alert("Please create a QRCode first")
    }
    let a = document.body.appendChild(document.createElement("a"))
    a.download = "qrcode"
    a.href = document.querySelector("#qrcode img").getAttribute("src")
    a.click()
}


