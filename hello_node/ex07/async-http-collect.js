/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/01 00:52:26 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/02 16:14:45 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

if (process.argv.length !== 5) {
	console.log("Error: too few or too many URLs");
	return ;
}

function collectHttp(url, str) {
	const p = new Promise((resolve, reject) => {
		const req = http.get(url, (res) => {
			res.setEncoding('utf8');
			res.on('data', (chunk) => {
				str += chunk;
			});
			res.on('end', () => {
				str += '\n';
				resolve(str);
			});
		}).on('error', (err) => {
			console.error(`Error: ${err.message}`);
		});
	});
	return p;
}

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let str = "";
collectHttp(url1, str)
	.then((str) => collectHttp(url2, str))
	.then((str) => collectHttp(url3, str))
	.then((str) => console.log(str.slice(0, -1)))
	.catch((err) => console.error(`Error: ${err.message}`));
