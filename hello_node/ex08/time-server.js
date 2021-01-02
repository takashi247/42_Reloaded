/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/02 08:43:24 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/02 15:32:20 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require('net');

if (process.argv.length !== 3) {
	console.log('Error: Please provide one port number');
	return ;
}

function formatDate(date) {
	const yyyy = String(date.getFullYear());
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	const hour = String(date.getHours()).padStart(2, "0");
	const min = String(date.getMinutes()).padStart(2, "0");
	return (`${yyyy}-${mm}-${dd} ${hour}:${min}`);
}

const server = net.createServer((socket) => {
	const date = new Date();
	const formatted = formatDate(date);
	socket.write(`${formatted}\n`);
	socket.end();
});

const port = parseInt(process.argv[2]);

try {
	server.listen(port).on('error', (err) => {
		console.error(`Error: ${err.message}`);
	});
} catch (error) {
	console.error(`Error: ${error.message}`);
}
