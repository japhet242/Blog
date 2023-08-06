export async function fetch_get(url, options={}){
    const headers={
        Accept:"application/json", 
       ...options.headers
    }
    const r=await fetch(url,{...options, headers})
    if (!r.ok) {
        throw new Error('erreur au niveau du serveur')
    }
    return r.json()
}
//appelle cette fonction tout en mettant la du
export async function tim(temps){
 const r= new Promise((resolve, reject)=>{
       setTimeout(()=>{
           resolve(temps)
    },temps)
}) 
return r
}