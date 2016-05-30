# AWS_IoT_WebStorm
Very basic example of AWS IoT server developed with WebStorm IDE

## Basic NGINX configuration
Using *nginx* as a frontend:

#### nodejs.conf at **default.d**/**sites-enabled** folder
        #  back office

        location ^~ /shadow {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_pass    http://127.0.0.1:3000/;
        }  
