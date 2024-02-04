#![deny(warnings)] // raise compiler warnings as erorrs

/* @TODO - Add Handling for multiple clients?
    Confirm that structs are like Classes and how to implement those in systems programming?
    Question - Does that make the thing flakey? Should every instance be isolated? */

    #[cfg(feature = "http3")]
    #[cfg(not(target_arch = "wasm32"))]
    #[tokio::main]
    async fn main() -> Result<(), reqwest::Error> {
        use http::Version;
        use reqwest::{Client, IntoUrl};
        use serde_json::json; // Ensure serde_json is added to your Cargo.toml
    
        // Placeholder for a function to send a GET request (GET requests typically do not send a JSON body)
        async fn get<T: IntoUrl>(url: T) -> reqwest::Result<reqwest::Response> {
            Client::builder()
                .http3_prior_knowledge()
                .build()?
                .get(url)
                .version(Version::HTTP_3)
                .send()
                .await
        }
    
        // Placeholder for functions to send POST and PATCH requests with a JSON body
        async fn post<T: IntoUrl>(url: T, body: serde_json::Value) -> reqwest::Result<reqwest::Response> {
            Client::builder()
                .http3_prior_knowledge()
                .build()?
                .post(url)
                .version(Version::HTTP_3)
                .json(&body)
                .send()
                .await
        }
    
        // Simulate getting URL and body from CLI arguments or default
        let url = "https://127.0.0.1:8000".to_string(); // Placeholder URL
        let body = json!({ "name": "test", "age": 42 }); // Placeholder body
    
        let res_post = post(&url, body).await?;
        println!("Response: {:?} {}", res_post.version(), res_post.status());
    
        Ok(())
    }
    
    #[cfg(any(target_arch = "wasm32", not(feature = "http3")))]
    fn main() {}
    