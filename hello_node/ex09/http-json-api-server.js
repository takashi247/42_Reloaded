/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/02 08:43:16 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/02 15:30:22 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');
const server = http.createServer();
const url = require('url');

if (process.argv.length !== 3) {
	console.log('Error: please provide one port number');
	return ;
}

server.on('request', (req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	if (req.method === 'GET') {
		const urlInfo = url.parse(req.url, true);
		const pathname = urlInfo.pathname;
		const isoStr = urlInfo.query.iso;
		const date = new Date(isoStr);
		if (pathname === '/api/parsetime') {
			const obj = {
				"hour": date.getUTCHours(),
				"minute": date.getMinutes(),
				"second": date.getSeconds()
			};
			res.write(JSON.stringify(obj) + '\n');
		} else if (pathname === '/api/unixtime') {
			const obj = {
				"unixtime" : date.getTime()
			};
			res.write(JSON.stringify(obj) + '\n');
		} else {
			res.write("Error: url is invalid\n");
		} 
	} else {
		res.write("Error: method should be GET\n");
	}
	res.end();
}).on('error', (err) => {
	console.error(`Error: ${err.message}`);
});

const port = parseInt(process.argv[2]);

try {
	server.listen(port);
} catch (err) {
	console.error(`Error: ${err.message}`);
}