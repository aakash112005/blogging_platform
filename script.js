
let blogPosts = [];

function addBlogPost(title, content) {
    const blogPost = {
        title,
        content,
        id: Date.now()
    };
    blogPosts.push(blogPost);
   
    displayBlogPosts();
    
}


function deleteBlogPost(id) {
    blogPosts = blogPosts.filter(blogPost => blogPost.id !== id);
    displayBlogPosts();
}


function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
    blogPosts.forEach(blogPost => {
        const blogPostHTML = `
            <div class="blog-post">
                <h2>${blogPost.title}</h2>
                <p>${blogPost.content}</p>
                <button class="delete-btn" onclick="deleteBlogPost(${blogPost.id})">Delete</button>
            </div>
        `;
        blogPostsContainer.insertAdjacentHTML('beforeend', blogPostHTML);
    });
}


document.getElementById('add-blog-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    addBlogPost(title, content);
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});  