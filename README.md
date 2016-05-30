# AWS_IoT_WebStorm
Very basic example of AWS IoT server developed with WebStorm IDE

## Server stating on boot
Don't forget to launch this *nodejs* server at boot time. This way we could use a humble **nginx** as frontend.


## Basic NGINX configuration
Using *nginx* as a frontend for *nodejs* servers. Those nodejs servers will be treated as extra locations.

To make it easier different configurations, a **default.d** folder was created to load different extra locations. For example, in the default configuation:
        server {
           listen       80 default_server;
           listen       [::]:80 default_server;
           server_name  localhost;
           root         /usr/share/nginx/html;

           # Load configuration files for the default server block.
           include /etc/nginx/default.d/*.conf;

           location / {
           }

nodejs.conf at **default.d** folder on *AWS EC2* box or *Debian Sid* box:
        #  back office

        location ^~ /shadow {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
            proxy_pass    http://127.0.0.1:3000/;
        }  
        
Don't forget to add to your *index.html* page a link to **nodejs** server:
        <a href="/shadow">Learning Cells AWS Shadow</a>
 
