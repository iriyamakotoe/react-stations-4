import React from 'react'
// import Code from '../json/20240813.json'

export const List = () => {
	// const data = Object.values(Code.data)
	// data.map((obj) => {
	// 	console.log(obj.title)
	// })
	return (
		<>
			<main>
				<h1>持ちものチェックリスト</h1>
				{/* <ul className="mt-5 mb-5">
					{data.map((obj, index) => (
						<li key={obj.title} className="">
							<input type="checkbox" id={'item_' + (index + 1)} />
							<label htmlFor={'item_' + (index + 1)}> {obj.title}</label>
						</li>
					))}
				</ul> */}
				{/* <p className="text-center">
					<button className="w-40 p-2 bg-gray-100 rounded">+ 持ちもの</button>
				</p> */}
			</main>
		</>
	)
}
export default List
