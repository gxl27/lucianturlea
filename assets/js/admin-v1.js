// admin area

let btnTechnologyRemove = document.querySelectorAll('.btn-technology-remove');


if(btnTechnologyRemove){
    btnTechnologyRemove.forEach(function(e){
        e.addEventListener('click', function(){
            // param = {id:e.dataset.id, techid:e.dataset.techid}
                link = e.dataset.link;
                axios.get(link)
                    .then(res =>{
                        console.log(res)
                        if(res.status == 200){

                            location.reload();
                        }else{
                            alert("Error")
                        }
                    })   
        })
    })
}