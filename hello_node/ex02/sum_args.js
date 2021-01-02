/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnishina <tnishina@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/31 20:12:45 by tnishina          #+#    #+#             */
/*   Updated: 2021/01/03 02:31:59 by tnishina         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const num_str = process.argv;
let sum = 0;
let i = 2;

if (process.argv.length <= i) {
	console.log("Error: provide at least one number");
} else {
	while (i < num_str.length)
		sum += parseInt(num_str[i++], 10);
	if (sum === sum) {
		console.log(sum);
	} else {
		console.log('Error: input should be numbers');
	}
}
