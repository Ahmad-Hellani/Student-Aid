var click_count = 0;
function Toggle_Menu(){
    var ulshow = document.getElementById("navbarNav");
    click_count++;
    if(click_count%2==0){
        ulshow.classList.remove('show');
        ulshow.classList.add('collapse');
    }else{
        ulshow.classList.remove('collapse');
        ulshow.classList.add('show');
    }
}

var Links = document.getElementById("links");
var universities = [];
Uni = [];
var Uni = document.getElementById("Uni-se");
universities = [...Uni];
var majors = [];
var major = [];
var major = document.getElementById("Major");
majors = [...major];
var links = [];
var n = 100;
for(let i=0; i<n; i++){
    links[i] = [];
    for(let j=0; j<n; j++){
        links[i][j] = [];
        for(let k=0; k<n; k++){
            links[i][j][k] = null;
        }
    }
}

var new_Stuff = [universities, majors, links];

//links for cs in lu
new_Stuff[2][1][1] = [
                        ['<a href="https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe" target="_blank">Code Blocks <br>\n'],
                        ['<a href="https://code.visualstudio.com/docs/?dv=win64user" target="_blank">Visual Studio Code <br>\n'],
                        ['<a href="https://customerconnect.vmware.com/downloads/details?downloadGroup=WKST-PLAYER-1750&productId=1377&rPId=111473" target="_blank">VMware 17 <br>\n'],
                        ['<a href="https://releases.ubuntu.com/18.04/ubuntu-18.04.6-desktop-amd64.iso" target="_blank">Ubuntu 18 <br>\n'],
                        ['<a href="https://download.virtualbox.org/virtualbox/7.0.12/virtualbox-7.0_7.0.12-159484~Ubuntu~bionic_amd64.deb" target="_blank">Virtual Box - Ubuntu<br>\n'],
                        ['<a href="https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2023-09/R/eclipse-inst-jre-win64.exe&mirror_id=105" target="_blank">Eclipse <br>\n'],
                        ['<a href="https://download.oracle.com/otn-pub/otn_software/db-express/OracleXE213_Win64.zip" target="_blank">Oracle <br>\n']
                     ];
//links for biochem in lu
new_Stuff[2][1][2] = ['<a href="#">\n'];


//links for cs in liu
new_Stuff[2][2][1] = [
                        ['<a href="https://dlcdn.apache.org/netbeans/netbeans-installers/20/Apache-NetBeans-20-bin-windows-x64.exe" target="_blank">Apache NetBeans <br>\n'], 
                        ['<a href="https://code.visualstudio.com/docs/?dv=win64user" target="_blank">Visual Studio Code <br>\n'],
                        ['<a href="https://redirector.gvt1.com/edgedl/android/studio/install/2023.1.1.26/android-studio-2023.1.1.26-windows.exe" target="_blank">Android Studio\n']
                     ];

//links for cs in iul                     
new_Stuff[2][3][1] = [
                        ['<a href="https://code.visualstudio.com/docs/?dv=win64user" target="_blank">Visual Studio Code <br>\n'],
                        ['<a href="https://download.virtualbox.org/virtualbox/7.0.12/virtualbox-7.0_7.0.12-159484~Ubuntu~bionic_amd64.deb" target="_blank">Virtual Box - Ubuntu\n']
                     ];


var width = window.innerWidth;

function Major_Programs(){
    var Major = document.getElementById("Major").selectedIndex;
    var Uni = document.getElementById("Uni-se").selectedIndex;
    Links.innerHTML = new_Stuff[2][Uni][Major].join("");
}

function Mic_Off(){
    var version = document.getElementById("Microsoft-Office").selectedIndex;
    switch(version){
        case 1: window.open("https://brameg.org/?url=MTA1OA==","_blank");
        break;
        case 2: window.open("https://brameg.org/?url=MTQ0","_blank");
        break;
        case 3: window.open("https://brameg.org/?url=MTAyNw==","_blank");
        break;
        case 4: window.open("https://brameg.org/?url=MTY3MQ==","_blank");
        break;
        case 5: window.open("https://brameg.org/?url=MjE2Mg==","_blank");
        break;
        case 6: window.open("https://brameg.org/?url=MTcxNQ==","_blank");
        break;
    }
}

function Download(){
    window.open("C:/Users/ahmed/OneDrive/Desktop/Stuff/Resume/Resume.pdf", 'Download');
}

function Scroll_Down(){
    window.scrollTo(0,document.body.scrollHeight);
}

function Scroll(){
    if(click_count%2!=0){
        window.scrollBy(0,430);
        
    }else{
        window.scrollBy(0,400);
    }
}

function Add_University(){
    var new_university = document.getElementById("new-university").value;
    var new_mini = document.getElementById("new-mini").value;
    var select1 = document.getElementById("Uni-se");
    if((new_university!="")&&(new_mini!="")){
        new_university = new Option(new_university,new_mini);
        universities.push(new_university); 
        select1.add(new_university,undefined);
    }
}
function Add_Major(){
    var new_major = document.getElementById("new-major").value;
    var select2 = document.getElementById("Major");
    if(new_major!=""){
        new_major = new Option(new_major,"");
        select2.add(new_major,undefined);
    }
}

const valid = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g; 
function Add_Link(){
    var new_url = document.getElementById("new-url").value;
    var new_soft_name = document.getElementById("new-soft-name").value;
    var Major = document.getElementById("Major").selectedIndex;
    var Uni = document.getElementById("Uni-se").selectedIndex;
    var url_object = `<a href="${new_url}" target="_blank">${new_soft_name}<br>\n`;
    if(new_soft_name!=""){
        if(new_url!=""){
            if(new_url.match(valid)==null){
                alert('Invalid url');
            }else{
                links[Uni][Major].push(url_object);
                Major_Programs();    
            }
        }else{
            alert('You need to enter the downloading link of the software');
        }
    }else{
        alert('You need to enter the name of the software');
    }
}