if [ $1 == "up" ]; then
	docker build -t medtech/web .
	docker run -d --name myweb -p 9000:80 -v $(pwd)/app:/app -e ALLOW_OVERRIDE=true medtech/web
	sudo chown -R medtech app
elif [ $1 == "stop" ]; then
    docker stop myweb
elif [ $1 == "start" ]; then
    docker start myweb
	sudo chown -R medtech app
fi
