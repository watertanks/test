fetch("./data.json")
.then((str)=>( str.json() ))
.then((data)=>{
    // console.log(data.items)



    // show All img 
    let A='';
    data.items.forEach( (v,k) => {
    
        A +=`<div class="thumb">
                    <a href="${v['detail']}" class="image"><img src="${v['thumb']}" alt="" /></a>
                    <h2>${v['name']}</h2>
                </div>`
    });
    $('#main').html(A);





    // show a img
    let B = 0;
        $('.thumb').on('click',function(){
            event.preventDefault();
            B=$(this).index() + 1;

                $('.poptrox-overlay').show();
                
                $('.pic').html(`<img src="images/fulls/${[B]}.jpg" alt="">`)
                
            })

    

    //hide popup
    $('.closer').on('click',function(){
        $('.poptrox-overlay').hide()
    })

    //if push 'esc'key, hide popup
    $(document).keyup('27',function(){
        $('.poptrox-overlay').hide()
    })



    //prev btn function
    $('.nav-previous').on('click',function(){
        
        if(B<2){
            B=2
        }

        $('.pic').html(`<img src="images/fulls/${[--B]}.jpg" alt="">`)
    })




    //next btn function
    $('.nav-next').on('click',function(){
        
    $('.pic').html(`<img src="images/fulls/${[++B]}.jpg" alt="">`)

        if(B>11){
            B=11
        }
    })

    //footer add active toggle
    $('#footer').addClass('active')

    $('#header nav').on('click',function(){
        $('#footer').toggle(400)
    })






    //Send method
    let emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    
    $('input[type=submit]').on('click',()=>{
        if( !$('input[name=name]').val()  ){
            alert('이름을 확인하세요.')
            event.preventDefault();
            return;

        }else if(  !emailReg.test($('input[name=email]').val())  ){
            alert('이메일을 확인하세요.')
            event.preventDefault();
            return;
            
        }else{
            event.preventDefault();
            $('#footer').hide('active')
        }
    })





})
