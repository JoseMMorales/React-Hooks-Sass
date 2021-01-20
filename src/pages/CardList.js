import { Card } from '../components/CardList/Card';

export function CardList() {
	return (
		<div className='container-card'>
            <h1 className='text-center'>Cards</h1>
            <Card
                src='/img/imageCap.jpg'
                title='First Card title'
                paragraph='Some quick example text to build on the card title and make up the bulk of the card content.'
                buttonHref='/'
                buttonText='Go somewhere'
            />
            <br/>
            <Card
                src='/img/imageCap.jpg'
                title='Second Card title'
                paragraph='Some quick example text to build on the card title and make up the bulk of the card content.'
                buttonHref='/'
                buttonText='Go somewhere'
            />
		</div>
	)
}
