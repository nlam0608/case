// Tạo mảng chứa
let arrName=[];
let arrCode = [];
let arrPrice = [];
let arrNumber = [];
let arrContent = [];
// let index = 0;

// Tạo hàm vẽ đồng thời hiển thị
function drawTable(){
    let data = "<br><table style='width: 600px'>"
    for (let i = 0; i < arrName.length; i++) {
        data+="<tr>";
        data+="<td>" + arrName[i]+"</td>";
        data+="<td>" + arrCode[i]+"</td>";
        data+="<td>" + arrPrice[i]+"</td>";
        data+="<td>" + arrNumber[i]+"</td>";
        data+="<td>" + arrContent[i]+"</td>";
        data+="<td>"+"<button type='button' onclick='editArr("+i+")'>Chỉnh sửa</button>"+"</td>";
        data+="<td>"+"<button type='button' onclick='deleteArr("+i+")'>Xoá SP</button>"+"</td>";
        data+="</tr>"
    }
    data+="<table>";
    document.getElementById("display").innerHTML = data;
}

// Tao ham chinh sua
function editArr(i){
    arrName[i] = prompt("Nhập lại tên sản Phẩm:");
    arrCode[i] = prompt("Nhập lại mã Code:");
    arrPrice[i] = prompt("nhập lại giá sản phẩm:");
    arrNumber[i] = prompt("Nhập lại số lượng :");
    arrContent[i] = prompt("Nhạpa lại nội dung sản phẩm:");
    drawTable()
}

// Tai ham xoa
function deleteArr(i){
    arrName.splice(i,1)
    drawTable()
}

// lấy du liểu vào đưa vào mảng
function addName(){
    let newProduct = document.getElementById("name").value;
    arrName.push(newProduct);
    document.getElementById("name").value = "";

    let newCodeProduct = +document.getElementById("code").value;
    arrCode.push(newCodeProduct);
    document.getElementById("code").value = "";

    let newPriceProduct = document.getElementById("price").value;
    arrPrice.push(newPriceProduct);
    document.getElementById("price").value = "";

    let newNumberProduct = +document.getElementById("number").value;
    arrNumber.push(newNumberProduct);
    document.getElementById("number").value = "";

    let newcontent = document.getElementById("content").value;
    arrContent.push(newcontent);
    document.getElementById("content").value = "";
    drawTable()
}
// // hàm xắp xếp Max
// function maxArr(){
//     let arr = arrPrice;
//     let max = arr[0];
//     for (let i = 0; i <arr.length ; i++) {
//         if (arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// // hàm Min
// function minArr(){
//     let min = arr[0];
//     for (let i = 0; i <arr.length ; i++) {
//         if (arr[i]>min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
//
// // Gọi hàm xắp sếp
// function sortArr(){
//     let priceMax = document.getElementById("pricMax").value;
// }



