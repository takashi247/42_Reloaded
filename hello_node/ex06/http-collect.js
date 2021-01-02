/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/01 00:00:32 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/02 15:51:10 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

if (process.argv.length !== 3) {
	console.log("Error: No URL or too many URLs");
	return ;
}

try {
	const req = http.get(process.argv[2], (res) => {
		let str = "";
		res.setEncoding('utf8');
		res.on('data', (chunk) => {
			str += chunk;
		});
		res.on('end', () => {
			console.log(str.length);
			console.log(str);
		});
	}).on('error', (err) => {
		console.error(`Error: ${err.message}`)
	});
} catch (err) {
	console.error(`Error: ${err.message}`)
}
