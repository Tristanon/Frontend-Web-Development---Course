const blogPosts = [
{
    title: 'Toán 12',
    author: 'Trí',
    publishDate: '11/9/2004',
    content:' cho vui '
},
{
    title: 'Văn 12',
    author: 'Toàn',
    publishDate: '02/01/2004',
    content: 'cho vui'
},
{
    title: 'Lý',
    author: 'Đức',
    publishDate: '20/10/2004',
    content: 'cho vui'
}
]

for (let i = 0; i < blogPosts.length; i++ ) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    // Here, we would use these variables to do something with each post
    // I' ll just print the values
    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}
