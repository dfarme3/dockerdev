FROM tutum/apache-php
RUN apt-get update && apt-get install -yq git && rm -rf /var/lib/apt/lists/*
RUN rm -fr /app
ADD ./app /app
COPY env/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY env/envvars /etc/apache2/envvars

