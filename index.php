<?php
    $api_url = 'https://api.darksky.net/forecast/3863e24ba4c4ce2f0a62e81f27da7b2b/37.8267,-122.4233'

    $forcast = json_decode(file_get_contents(api_url));
    echo '<pre>';
    print_r(forcast);
    echo '<pre></pre>'

