$(document).ready(function(){
    $(".development_img").click(function(){
        $(".devText").show();
        $(this).hide()
    })

    $(".devText").click(function(){
        $(".development_img").show();
        $(this).hide()
    })

    $(".design_img").click(function(){
        $(".designText").show();
        $(this).hide()
    })
 
    $(".designText").click(function(){
        $(".design_img").show();
        $(this).hide()
    })
    $(".product_img").click(function(){
        $(".productText").show();
        $(this).hide()
    })

    $(".productText").click(function(){
        $(".product_img").show();
        $(this).hide()
    })

//     $("#button").click(function(e){
//         e.preventDefault();
//         var email =$("#email").val();
//         var textarea =$("#textarea").val()
//         var name =$("#name").val()

//         if(name===""|| textarea===""|| email===""){
//             alert("Please fill all the fields")
//             return;
//         }
//         else {
        
//          alert(name+", Email from "+email+ " has been received. Thank you")
       
//         }
//     })
// })