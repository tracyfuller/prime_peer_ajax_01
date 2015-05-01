var input;
var avatar;
var name;
var link;

function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'text',
        crossDomain: true,
        url: 'https://api.github.com/users/'+ query+'?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
        complete: function() {
            console.log('ajax complete');
        },
        success: function(data){
            avatar = data.avatar_url;
            name = data.login;
            link = data.html_url;
            console.log(data);
            $(".profileImg").attr("src", avatar);
            $(".userName").text(name);
            $(".pageLink").attr("href", link);
        }
    });

}

$(document).ready(function(){
    //search("tracyfuller");
//calling the api, CORS function, find the username, the link to their github page, profile image, public info
    //display an error message


$("#search-btn").on("click", function(event){
    event.preventDefault();
    input = $("#searchBox").val();
    console.log(input);
    search(input);



});

//html_url
//login - username
    //avatar_url
    //followers_url
    //following_url

});

