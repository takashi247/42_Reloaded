/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/31 21:55:54 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/03 00:09:33 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

if (process.argv.length !== 3) {
	console.log('Error: too few or too many arguments');
	return ;
}

try {
	const file = fs.readFile(process.argv[2], () => {});
	console.log(file.toString().split('\n').length - 1);
} catch (err) {
	console.error(err.message);
}

// fs.readFile(process.argv[2], (error, file) => {
// 	if (error) {
// 		console.error(`Error: ${error.message}`);
// 	} else {
// 		console.log(file.toString().split('\n').length - 1);
// 	}
// });
