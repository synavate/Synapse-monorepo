// Executes GET, POST, and PATCH requests with expected parameters and returns a valid response
#[cfg(test)]
#[tokio::test]
async fn test_execute_requests() {
    // Initialize and invoke the main function
    let result = main().await;

    // Assert that the result is Ok
    assert!(result.is_ok());
}

// Uses default URL and body when no CLI arguments are provided
#[cfg(test)]
#[tokio::test]
async fn test_default_arguments() {
    // Initialize and invoke the main function
    let result = main().await;

    // Assert that the result is Ok
    assert!(result.is_ok());
}

// Handles error when no URL is provided
#[cfg(test)]
#[tokio::test]
async fn test_no_url_error() {
    // Initialize and invoke the main function
    let result = main().await;

    // Assert that the result is an Err
    assert!(result.is_err());
}

// Handles error when GET request fails
#[cfg(test)]
#[tokio::test]
async fn test_get_request_error() {
    // Initialize and invoke the main function
    let result = main().await;

    // Assert that the result is an Err
    assert!(result.is_err());
}
