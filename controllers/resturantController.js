module.exports.viewAll = function(req, res, next) {
    const restaurants = [ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating: 2,
        category: 'Italian',
        description: 'asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl'
    },
    {
        id: 2,
        name: 'Chipotle',
        image: 'https://d1ralsognjng37.cloudfront.net/afb087dc-e5f1-47ef-96ce-f84dbfa5c6fa.jpeg',
        rating: 4,
        category: 'Mexican',
        description: 'asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl asdf jkl asdfg hjkl asdfg hjkl asdfg hjkl'
    }];
    res.render('index', {restaurants});
}