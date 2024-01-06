const nums = document.querySelectorAll('.numbers span')
const counter = document.querySelector('.counter')
const mensajeFinal = document.querySelector('.final')
const replay =document.getElementById('replay')


runAnimation()

function resetDOM(){
   counter.classList.remove('hide')
   mensajeFinal.classList.remove('show')

   nums.forEach((num)=>{
    num.classList.value=''
   })
   nums[0].classList.add('in')
}
function runAnimation(){
    nums.forEach((num,idx)=>{
        const nextToLast = nums.length -1 
        num.addEventListener('animationend', (e)=>{
            if(e.animationName === 'goIn' && idx !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut'&& num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else {
                counter.classList.add('hide')
                mensajeFinal.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click',()=>{
    resetDOM()
    runAnimation()
})