import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';
const postId = 1;

test.describe('API Endpoint JSONPlaceholder Tests', () => {
  test('GET /posts returns a list of posts', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const posts = await response.json();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toEqual(100);
    expect(posts.length).toBeGreaterThan(0);
    

    for (const prop of ['userId', 'id', 'title', 'body']) {
      expect(posts[0]).toHaveProperty(prop);
    }
  });

  test(`GET /posts/${postId} returns a valid post`, async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/${postId}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post).toHaveProperty('id', 1);
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });

  test(`GET/posts/${postId}/comments returns comments for post 1`, async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/${postId}/comments`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const comments = await response.json();
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBeGreaterThan(0);
    
   for (const comment of comments)   {
      expect(comment).toHaveProperty('postId', postId);
      expect(comment).toHaveProperty('id');
      expect(comment).toHaveProperty('name');
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
    };
  });

  test(`GET /comments?postId=${postId} return comments for post 1`, async ({ request }) => {
    const response = await request.get(`${baseURL}/comments/?postId=${postId}`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);

    for (const user of users) {
      expect(user).toHaveProperty('postId', postId);
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('body');
    }
  });

  test('POST /posts creates a new post', async ({ request }) => {
    const newPost = {
      userId: 1,
      title: 'New Post',
      body: 'new post body',
    };

    const response = await request.post(`${baseURL}/posts`, {
      data: newPost,
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);

    const createdPost = await response.json();
    expect(createdPost).toHaveProperty('id');
    // expect(createdPost).toMatchObject(newPost);
    expect(createdPost.title).toEqual('New Post');
    expect(createdPost.body).toEqual('new post body');
  });

  test (`PUT /posts/${postId} updates an existing post`, async ({ request }) => {
    const updatedPost = {
      userId: 1,
      title: 'Updated Post',
      body: 'updated post body',
    };

    const response = await request.put(`${baseURL}/posts/${postId}`, {
      data: updatedPost,
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post).toHaveProperty('id', postId);
    expect(post).toMatchObject(updatedPost);
  });

  test (`PATCH /posts/${postId} partially updates a post`, async ({ request }) => {
    const partialUpdate = {
      title: 'Partially Updated Post',
    };

    const response = await request.patch(`${baseURL}/posts/${postId}`, {
      data: partialUpdate,
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post).toHaveProperty('id', postId);
    expect(post).toHaveProperty('title', partialUpdate.title);
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('body');
    
  });

  test(`DELETE /posts/${postId} deletes a post`, async ({ request }) => {
    const response = await request.delete(`${baseURL}/posts/${postId}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post).toEqual({});
  });

});
