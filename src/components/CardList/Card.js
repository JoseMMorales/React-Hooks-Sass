export function Card({ src, title, paragraph, buttonHref, buttonText}) {
	return (
		<>
			<div className='card'>
				<img 
					className='card-img-top' 
					src={src} 
					alt='Card image cap'/>
				<div className='card-body'>
					<h5 
						className='card-title'>
						{title}
					</h5>
					<p 
						className='card-text'>
						{paragraph}
					</p>
					<a 
						href={buttonHref} 
						className='btn btn-primary'>
						{buttonText}
					</a>
				</div>
			</div>
		</>
	)
}
