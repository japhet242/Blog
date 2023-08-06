import {fetch_get} from'/fonction.js'
import {tim} from'/fonction.js'
const body=document.querySelector('body')
const recherche =document.querySelector('.recherche')
const img_recherche =document.querySelector('.img_recherche')
const img=document.querySelector('.img img')
const button=document.querySelector('.nav button')
const nav=document.querySelector('.nav')
const main=document.querySelector('main')



img.addEventListener('click', e=>{
    recherche.classList.add('affiche')
})
img_recherche.addEventListener('click', e=>{
    recherche.classList.remove('affiche')
})
button.addEventListener('click', e=>{
    nav.classList.toggle('open')
})
main.addEventListener('click', e=>{
        nav.classList.remove('open')

})
class affiche_non_act {
    #target
    #elements
    #endpoint
    constructor(element) {
    this.#target=element
    this.#elements=JSON.parse(element.dataset.elements)
    this.#endpoint=element.dataset.endpoint
    this.post_target()
    }
    async post_target(){
       const r=await fetch_get(this.#endpoint)
       for(let comment of r){
           const template=document.querySelector('#template1').content.cloneNode(true)
           const img=template.querySelector('.img_non_une img')
           img.src=comment.chemin_image
           const href=template.querySelector("a")
           href.setAttribute(`href`,`${comment.endpoint}`)
           for(const [key,selector] of Object.entries(this.#elements)){
               template.querySelector(selector).innerText=comment[key]
           }
           this.#target.append(template)
       }
    }
}

document.querySelectorAll('.non_a_la_une').forEach(entry=>new affiche_non_act(entry))

class commentaires {
    #elements
    #target
    #template
    #element
    #table=[]
    constructor(element) {
        this.#elements=JSON.parse(element.dataset.elements)
        this.#target=element
        this.#template=document.querySelector(element.dataset.template)
        this.#element
       
         const form=element.querySelector('form')
         form.addEventListener('submit', e=>this.getcomment(e))
         const get_local=localStorage .getItem('add')?.toString()
         if (get_local) {
             this.#table=JSON.parse(get_local)
                      console.log(get_local)
                      this.appendTo()

         }
    }
    #oneadd(){
        localStorage.setItem('add', JSON.stringify(this.#table))
    }
    appendTo(){
        
        this.#table.forEach(datas => {
        console.log(datas)
            const template = this.#template.content.firstElementChild.cloneNode(true)
            for (const [key, selector] of Object.entries(this.#elements)) {
                template.querySelector(selector).innerText = datas[key]
            }
            const div = document.querySelector('.target2')
            div.append(template)
            this.#oneadd()
        })
    }
    getcomment(e){
        e.preventDefault()
        const form=e.currentTarget
        const data=new FormData(form).get('name').trim()
        const data1=new FormData(form).get('text').trim()
        if (data===''||data1==='') {
            return
        }
        const datas1={
            name:data, 
            text:data1
        }
        this.#table.push(datas1)    

       
           
         const template=this.#template.content.firstElementChild.cloneNode(true)
        for(const [key,selector] of Object.entries(this.#elements)){
           template.querySelector(selector).innerText=datas1[key]
        } 
        const div=document.querySelector('.target2')
        div.append(template)
        this.#oneadd()
        form.reset()
    } 

}
document.querySelectorAll('.commentaires').forEach(el=>new commentaires(el))


//ce script dois toujours être à la fin 

await tim(1000)
console.log(body)
body.style.background="#BB28D5"
await tim(2000)
body.style.background="green"
await tim(2500)
body.style.backgroundImage="url('/image/1663170780803.jpg')"
body.style.backgroundSize="cover"
body.style.backgroundOrigin='top'
await tim(3000)
body.style.background="#FFFFFF"
a
