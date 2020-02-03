import faker from 'faker';

let blogList = [];

for(let i = 0; i<=10; i++){
	let data = {
		id: faker.random.number(9999),
		title: faker.lorem.sentence(10),
		summary: faker.lorem.sentence(12),
		created_by: faker.name.findName(),
		created_at: faker.date.past()
	}
	blogList.push(data);
}

export default blogList;
