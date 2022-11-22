const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

const displayComments = comments => {
    // console.log(comments);
    const commentContainer = document.getElementById('comment-container');
    comments.forEach(comment => {
        // console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h4>Post ID: ${comment.postId}</h4>
            <h5>Name: ${comment.name}</h5>
            <p>Comment: ${comment.body}</p>
            <button onclick="knowMore(${comment.postId})">More</button>
        `;
        commentContainer.appendChild(commentDiv);
    })
}

const knowMore = (postId) => {
    const url = (`https://jsonplaceholder.typicode.com/posts/${postId}`);

    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data))
    // console.log(url);
}

const displayDetail = detail => {
    // console.log(detail);
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('comment');
    detailDiv.innerHTML = `
        <h4>Name: ${detail.title}</h4>
        <h5>User Id: ${detail.userId}</h5>
        <h5>Post Id: ${detail.id}</h5>
        <p>Comment: ${detail.body}</p>
    `;
    detailContainer.appendChild(detailDiv);
}

loadComments();

