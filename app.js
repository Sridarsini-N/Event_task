function demo(){
    var inp=document.getElementById('number').value;
    var opt='<option value="">Select</option>';
    for(let i=0;i<inp;i++)
    {
        opt += '<option>' +i+ '</option>';
    }

    document.getElementById('select').innerHTML=opt;
}
function change(){

    var final=document.getElementById('select').value;
    var arr=[];
    for(let i=0;i<=final;i++){
         arr.push(i);
    }
    document.getElementById('result').innerHTML=arr.join("<br>");

}