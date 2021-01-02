/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/31 22:06:59 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/02 15:47:26 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

if (process.argv.length !== 3) {
	console.log("Error: Too few or too many URLs");
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
			console.log(str);
		});
	}).on('error', (err) => {
		console.error(`Error: ${err.message}`);
	});
} catch (err) {
	console.error(`Error: ${err.message}`)
}
