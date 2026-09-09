const chart=document.getElementById("average");

new Chart(chart,{
    type:"bar",
    data:{
        labels:["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],
        datasets:[{
            label:"Electricy Used",
            data:[75,72,68,66,66,65,62]
        }]

    options:{
        scales:{
            y:{
                ticks{
                callback:function(value){
                    return value+"%";
                }
            }
        }
    }
});
