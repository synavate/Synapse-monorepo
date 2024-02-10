use warp::{Filter, Rejection, Reply};
type Result<T> = std::result::Result<T, Rejection>;

#[tokio::main]
async fn main() {
    let health_route = warp::path!("health").and_then(health_handler);
    let routes = health_route.with(warp::cors().allow_any_origin());

    //@TODO change to 0.0.0.0 for Docker
    println!("Started server at localhost:8000");
    warp::serve(routes).run(([127, 0, 0, 1], 8000)).await;
}

async fn health_handler() -> Result<impl Reply> {
    Ok("OK")
}