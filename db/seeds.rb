# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Food.create({name: 'Pizza', image: 'https://popmenucloud.com/pqkcorbf/ae2985ed-ae39-4377-8190-9c0ad9e0d06c.jpg', price: 10, description: 'cheesy w/ pep'})
Food.create({name: 'Hotdog', image: 'https://cdn.leitesculinaria.com/wp-content/uploads/fly-images/319943/perfect-hot-dog-1200-1200x675-c.jpg.optimal.jpg', price: 7, description: 'choice of condiments'})
Food.create({name: 'Cheesesteak', image: 'https://momlifefoodandtravel.com/wp-content/uploads/2019/09/cheesesteaks-with-garlic-aioli.jpg', price: 8, description: 'steak, cheese, onions, peppers, the right way'})
Food.create({name: 'Cheeseburger', image: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/frenchs/t/2000/triple_mustard_bacon_cheese_burger2000x1125.jpg?rev=79eef4e784ab4f949b9cbd84f6518dd9&vd=20200628T193022Z&hash=2B4D97E252657A1FFF38160ED03DE92F', price: 12, description: 'cheese, 1/2 pound patty, lettuce, tomato, on a toasted bun'})
Food.create({name: 'Applepie', image: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg', price: 7, description: 'apples in a pie, the american way. $2 add on for icecream'})
Food.create({name: 'Saint Louis Ribs', image: 'https://grillgirl.com/wp-content/uploads/2019/12/AdobeStock_231543190-scaled.jpeg', price: 15, description: 'St. Louis Ribs, YUM'})


User.create({name: 'Leon', birthday: '1990-01-01'})
User.create({name: 'Eric', birthday: '1991-02-05'})
User.create({name: 'Greg', birthday: '1993-02-27'})
User.create({name: 'Mo', birthday: '1857-06-14'})