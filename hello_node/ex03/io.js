/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/31 20:47:27 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/02 15:41:40 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

if (process.argv.length !== 3) {
	console.log('Error: too few or too many arguments');
	return ;
}

try {
	const file = fs.readFileSync(process.argv[2], 'utf8');
	const text = file.toString();
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === '\n')
			count++;
	}
	console.log(count);
} catch (error) {
	console.error(`Error: ${error.message}`);
}