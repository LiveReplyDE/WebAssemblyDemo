// add split code point

export function expensive() {
    //wasm.primes_up_to(500);
    console.log('expensive')
    return import('./ww.js').then(res => {
        console.log(res.add(1,2))
    })

}