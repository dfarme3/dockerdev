# dockerweb

This is a quick and dirty web server that can be used to serve static content. This should be used when developing single page applications based on Angular.js.

## RUN AND SETUP

To use this tool, make sure that docker have been installed on you machine. 
In the root directory of dockerweb, type ./set.sh up. Please note that this set.sh file was designed to be used on a Linux based machine. You will have to make subtle changes to use it in Windows or on a Mac. The first step in the process is to build the docker based on the contents of the Dockerfile in the root.

The next step is to install all the pieces needed to get Angular to transpile. Point to the app/web folder and then type <pre>npm install</pre> to execute the contents of the package.json file. You may also have to install some pieces using bower to make the demo work so type <pre>bower install</pre>


## STOP
To stop the container that is running your web server, type <pre>docker stop myweb</pre>.
##START
To stop the container that is running your web server, type <pre>docker start myweb</pre>.
## CONTENT
Place your single page application, and all other files in the file called app/web - these will be server on port 9000.

It is assumed that you will be have another project running that will server the data and services that are used in your single page application.

This conatiner is based on Apache - there is no reason for that. It was easy, but any other webserver would do, including NGINX.
