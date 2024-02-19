<?php
function getApiKeys() {
    // Check if the HTTP_REFERER header is set
    if (!isset($_SERVER['HTTP_REFERER'])) {
        echo 'Access Denied!';
        exit;
    }

    // Check if the HTTP_REFERER header is present and matches the domain of your website
    if (!$_SERVER['HTTP_REFERER'] || !strpos($_SERVER['HTTP_REFERER'], $_SERVER['HTTP_HOST'])) {
        // The request is not coming from the same domain, reject it
        header('HTTP/1.1 403 Forbidden');
        exit;
    }

    // Enter Your API Keys Here
    $apiKeys = array(
        'stabilityai' => '123', // Your stability.ai API key
        'openai' => '123', // Your OpenAI API key
        'clipdrop' => '123', // Your Clipdrop API key
    );
    $apiKeys = json_encode($apiKeys);

    // Return the API keys
    echo $apiKeys;
}
getApiKeys();
?>