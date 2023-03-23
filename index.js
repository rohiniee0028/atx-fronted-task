let data = [
    {
        id:1,
        icon:"images/Bitcoin.png",
        name:"Bitcoin",
        abbr : "BTC",
        price:"$3625.24",
        changeRate:"+2.4%",
        chart:"images/vector3.png",
        marketcap:"$320,893,271,955"
    },
    {
        id:2,
        icon:"images/ethereum.png",
        name:"Ethereum",
        abbr : "ETH",
        price:"$1218.18",
        changeRate:"-0.7%",
        chart:"images/vector5.png",
        marketcap:"$148,563,792,762"
    },
    {
        id:3,
        icon:"images/shibu.png",
        name:"ShibuInu",
        abbr : "Shibu",
        price:"$0.001",
        changeRate:"+1.2%",
        chart:"images/vector3.png",
        marketcap:"$4,498,804,882"
    },
    {
        id:4,
        icon:"images/Bitcoin.png",
        name:"Bitcoin",
        abbr : "BTC",
        price:"$3625.24",
        changeRate:"+2.4%",
        chart:"images/vector3.png",
        marketcap:"$320,893,271,955"
    },
    {
        id:5,
        icon:"images/ethereum.png",
        name:"Ethereum",
        abbr : "ETH",
        price:"$1218.18",
        changeRate:"-0.7%",
        chart:"images/vector5.png",
        marketcap:"$148,563,792,762"
    },
    {
        id:6,
        icon:"images/shibu.png",
        name:"ShibuInu",
        abbr : "Shibu",
        price:"$0.001",
        changeRate:"+1.2%",
        chart:"images/vector3.png",
        marketcap:"$4,498,804,882"
    },
    {
        id:7,
        icon:"images/Bitcoin.png",
        name:"Bitcoin",
        abbr : "BTC",
        price:"$3625.24",
        changeRate:"+2.4%",
        chart:"images/vector3.png",
        marketcap:"$320,893,271,955"
    },
    {
        id:8,
        icon:"images/ethereum.png",
        name:"Ethereum",
        abbr : "ETH",
        price:"$1218.18",
        changeRate:"-0.7%",
        chart:"images/vector5.png",
        marketcap:"$148,563,792,762"
    },
    {
        id:9,
        icon:"images/shibu.png",
        name:"ShibuInu",
        abbr : "Shibu",
        price:"$0.001",
        changeRate:"+1.2%",
        chart:"images/vector3.png",
        marketcap:"$4,498,804,882"
    },
    {
        id:10,
        icon:"images/Bitcoin.png",
        name:"Bitcoin",
        abbr : "BTC",
        price:"$3625.24",
        changeRate:"+2.4%",
        chart:"images/vector3.png",
        marketcap:"$320,893,271,955"
    },
]

let container = document.getElementById("tbody");

data?.map((elem)=>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.setAttribute("class","td1")
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    span3.setAttribute("class","span3")
    let image = document.createElement("img");
    image.setAttribute("class","image")
    let chart = document.createElement("img");
    
    image.src=elem.icon;
    span1.append(image);
    span2.innerText = elem.name;
    span3.innerText = elem.abbr;
    
    td1.append(span1,span2,span3)

    td2.innerText = elem.price;
    td2.setAttribute("class","td2")
    td3.innerText = elem.changeRate;
    if(td3.innerText==="-0.7%"){
        td3.style.color="#FF0000"
    }else{
        td3.style.color="#14FF00"
    }
    chart.src = elem.chart;
    td4.append(chart)
    td5.innerText = elem.marketcap;

    tr.append(td1,td2,td3,td4,td5);
    container.append(tr);

})

function openBox(){
   document.querySelector("#side-modal").style.display = "block";
}

function closeBox(){
    document.querySelector("#side-modal").style.display = "none";
    window.location.reload();
 }