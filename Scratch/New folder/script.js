var Name = ["n1","n2"];
var id = [1,2];
var array = [Name , id];
for(let i=0; i<array.length; i++){
    array[i] = [Name[i] , id[i]];
}
//console.log(array[0]);

var links = [];
var i,j,k;
for(i=0; i<6; i++){
    links[i] = [];
    for(j=0; j<6; j++){
        links[i][j] = [];
        for(k=0; k<6; k++){
            links[i][j][k] = null;
        }
    }
}

links[0][0][1] = 5;
console.log(links[0][0][1]);

var soms = [1,2];
soms.forEach((som,index) =>{
    soms[index] = [];
});

soms[0][1] = 20;
console.log(soms[0][1]);

function Hi(){    
    var a = "Hi";
    var url = "https://facebook.com";
    var b = `<a href="${url}">${a}</a>`;
    console.log(b);
    document.getElementById("Hi").innerHTML = b;
}