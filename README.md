# AWS_IoT_WebStorm
Very basic example of AWS IoT server developed with WebStorm IDE

## Server nodejs
Don't forget to launch this *nodejs* server. For example, you might use **forever** nodejs utility and getting your nodejs server running:

          ec2-user@ip-172-31-43-186 etc]$ ps -edf | grep forever
          ec2-user  8289     1  0 May17 ?        00:00:00 /home/ec2-user/.nvm/versions/node/v6.1.0/bin/node /home/ec2-user/.nvm/versions/node/v6.1.0/lib/node_modules/forever/bin/monitor /home/ec2-user/AWS_IoT_WebStorm/bin/www

But it's better to configure that **launcher** to be invoked at boot time. This way you can use a humble **nginx** as frontend:

          [ec2-user@ip-172-31-43-186 etc]$ crontab -l
          @reboot .nvm/versions/node/v6.1.0/lib/node_modules/forever/bin/forever start /home/ec2-user/AWS_IoT_WebStorm/bin/www
           
           sevilan@debian:/usr/share/nginx/html$ sudo crontab -l
           @reboot /home/sevilan/.nvm/versions/node/v6.2.0/bin/forever start /home/sevilan/.nvm/versions/node/v6.2.0/bin/forever


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
 
