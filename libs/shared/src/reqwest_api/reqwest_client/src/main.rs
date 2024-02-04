#![deny(warnings)] // raise compiler warnings as erorrs

/* @TODO - Add Handling for multiple clients?
    Confirm that structs are like Classes and how to implement those in systems programming?
    Question - Does that make the thing flakey? Should every instance be isolated? */

#[cfg(feature = "http3")]
#[cfg(not(target_arch = "wasm32"))]
#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    use http::Version;
    use reqwest::{Client, IntoUrl, Response};

    //We associate a GET Method
    async fn get<T: IntoUrl + Clone>(url: T, req_body: json::Object) -> reqwest::Result<Response> {
        Client::builder()
            .http3_prior_knowledge()
            .build()?
            .get(url)
            .version(Version::HTTP_3)
            .send(req_body)
            .await
    }

    async fn post<T: IntoUrl + Clone>(url: T, body: json::Object) -> reqwest::Result<Response> {
        Client::builder()
            .http3_prior_knowledge()
            .build()?
            .post(url)
            .version(Version::HTTP_3)
            .send(body)
            .await
    }

    async fn patch<T: IntoUrl + Clone>(url: T, body: Object) -> reqwest::Result<Response> {
        Client::builder()
            .http3_prior_knowledge()
            .build()?
            .patch(url)
            .version(Version::HTTP_3)
            .send(body)
            .await
    }

    // Some simple CLI args requirements...
    let url = match std::env::args().nth(1) {
        Some(url) => url,
        None => {
            println!("No CLI URL provided, using default.");
            "https://127.0.0.1:8000".into()
        }
    };

    let body = match std::env::args().nth(2) {
        Some(body<Object>) => body,
        None => {
            println!("No CLI body provided, using default.");
            Object {let name: string: "test",
                    let age: i32: 42}
        }
    };

    eprintln!("Fetching {:?}...", url);

    let res_get = get(url, body).await?;
    let res_post = (post(url, body).await)?;
    let res_patch = (patch(url, body).await)?;

    eprintln!("Response: {:?} {}", res_get.version(), res_get.status());
    eprintln!("Headers: {:#?}\n", res_get.headers());
    
    eprintln!("Response: {:?} {}", res_post.version(), res_post.status());
    eprintln!("Headers: {:#?}\n", res_post.headers());

    eprintln!("Response: {:?} {}", res_patch.version(), res_patch.status());
    eprintln!("Headers: {:#?}\n", res_patch.headers());


    let body = res.text().await?;

    println!("{}", body);

    Ok(())
}

// Apparently using wasm32 improves performance by optimizing for it.
#[cfg(any(target_arch = "wasm32", not(feature = "http3")))]
fn main() {}