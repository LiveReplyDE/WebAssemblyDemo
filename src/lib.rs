extern crate cfg_if;
extern crate wasm_bindgen;


mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");

    // Manufacture the element we're gonna append
    let val = document.create_element("p")?;
    val.set_inner_html("Hello from Rust!");
    
    body.append_child(&val)?;

    Ok(())
}


#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-1!");
}

#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    return a + b;
}

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 1,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}


#[wasm_bindgen]
pub fn primes_up_to(n: u32) -> Vec<u32> {
        let mut result = (2 .. n + 1).collect::<Vec<u32>>();
        let mut pos = 0;
        while pos != result.len() {
            let prime = result[pos];
            result.retain(|&i| i == prime || i % prime != 0);
            pos += 1;
        }
        result
}

#[wasm_bindgen]
pub fn test(n: u32) -> u32 {
    n * 5
}
// STRING TEST FUNCTION
#[wasm_bindgen]
pub fn test2(text: &str) -> String {
    return String::from("Hello, ")+&text;
}