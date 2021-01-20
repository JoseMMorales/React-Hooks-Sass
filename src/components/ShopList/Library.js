import { useContext } from 'react';
import { GlobalContext } from '../../Context';

export function Library() {
	const {data} = useContext(GlobalContext);

	return (
		<div className='container'>
			<table className="table">
				<thead className="thead-light">
					<tr>
						{
                            Object.keys(data.books[0]).map((key, index) => {
                                return <th key={`Key-${index}`}>{key}</th>
                            })
						}
					</tr>
				</thead>
				<tbody>
					{
                        data.books.map(book => {
                            return (
                                <>
                                    <tr key={`Author-${book.author}`}>
                                        {
                                            Object.values(book).map((value, index) => {
                                                return <td key={`Value-${index}`}>{value}</td>
                                            })
                                        }
                                    </tr>
                                </>
                            )
                        })
					}
				</tbody>
			</table>
		</div>
	)
}
