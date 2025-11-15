# Hello WAR Frontend (React + Vite)

- React + Vite app
- Built assets will be served via NGINX from `/var/www/hello-frontend`
- Landing page shows 5 version cards linking to `/v1`..`/v5`
- NGINX will proxy `/v1`..`/v5` to backend Tomcat endpoints.
