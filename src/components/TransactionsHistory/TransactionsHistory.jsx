import React from 'react'
import s from "./TransactionsHistory.module.css"

const TransactionsHistory = ({ items }) => {
	return (
		<table className={s.table}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(({ id, type, amount, currency }) => {
					return (
						<tr key={id}>
							<td>{type}</td>
							<td>{amount}</td>
							<td>{currency}</td>
						</tr>)
				})}
			</tbody>

		</table>
	)
}

export default TransactionsHistory