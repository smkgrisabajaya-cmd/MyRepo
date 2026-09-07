const ctx=document.getElementById("chart");
new Chart(ctx,{
    type:"bar",
    data:{
        labels:["Senin","Selasa","Rabu","Kamis"],
        datasets:[{
            label:"pengunjung",
            data:[12,19,8,15]
        }]
    }
});