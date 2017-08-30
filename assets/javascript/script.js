(function(){
  $(function(){

    let initialURL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=34466e6832c4ee74ac789a6af7006abe&hash=e03db4abbc702c4934129ca769aa1791"

    //API call to get characters based on different URLs
    function getCharacters(url){
       $.get(url, function(data){
        let info = data.data.results
        for(let i=0; i < info.length; i++){
            $("#table_body").append(info[i].name)
            $("#table_body").append("<img src='"+ info[i].thumbnail.path + "." + info[i].thumbnail.extension +"' height=250px />'")
        }
      })
    }

    //save initial API response in a variable and call it initially
    getCharacters(initialURL)

    //code for when the submit button is clicked
    $("#submit_button").click(function(){
      if($("#userSearch").val() !== ""){
        let searchParam = $("#userSearch").val()
        let newURL = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=34466e6832c4ee74ac789a6af7006abe&hash=e03db4abbc702c4934129ca769aa1791&nameStartsWith=" + searchParam
        $("#table_body").html("")
        getCharacters(newURL)
      }else{
        $("#table_body").html("")
        getCharacters(initialURL)
      }
    })



  })
})()
