$(document).ready(()=>{

    $(".devour-form").on("submit", function(event){
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val()
        var devoured = $(this).children(".burger_id").attr("data-devoured")
        console.log(devoured)

        $.ajax({
            method: "PUT",
            url: "/burgers/update/" + burger_id,
            data: { devoured: parseInt(devoured) === 0 ? 1 : 0 }
        }).then(function(data){
            console.log(data)
            location.reload();
        })
    })

})