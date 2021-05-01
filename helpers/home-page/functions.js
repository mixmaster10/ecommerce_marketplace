import axios from 'axios';
export let helpers = {};

helpers.getUser = async function (id) {
    const data = await axios({
        url: 'http://ecom-mysql.api.bluejestic.local/graphql',
        // url: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT,
        method: 'post',
        data: {
            query: `
                query {
                    users {
                        id
                        likes_count
                        comments {
                            comment
                            createdAt
                        }
                    }
                }
            `,
        },
    });
    console.log(data.data, 'line 24');
    return data.data;
};

helpers.login = async function (credentials) {
    try {
        let endpoint = 'http://ecom-mysql.api.bluejestic.local/auth/local';
        const loginUser = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                identifier: credentials.username,
                password: credentials.password,
            }),
        });

        const data = await loginUser.json();
        if (data.message) {
            throw data.message[0].messages[0].message;
        } else {
            return data;
        }
    } catch (err) {
        return err;
    }
};

helpers.createPost = async function (data) {
    try {
        //Since we need the id of the post before we can create the picture, we will create it and the use the id from axios to create it's picture
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjlhN2JjZWI5MGFlMzkwY2FlNGU1YyIsImlhdCI6MTYxOTgwODExNSwiZXhwIjoxNjIyNDAwMTE1fQ.YtLawc1BzU2JE9dH9Gy6iiiC79r0L4Hm5MikLl3YM_k';
        //since axios need an object
        const formDataToSend = {
            title: data.title,
            message: data.message,
            content_type: data.contentType,
            type: data.type,
        };
        console.log(formDataToSend);
        const inputValue = await axios({
            url: 'http://ecom-mysql.api.bluejestic.local/posts',
            method: 'POST',
            data: formDataToSend,
            headers: {
                Authorization: `Bearer ${token}`,
                // 'Access-Control-Allow-Origin': '*',
            },
        });

        console.log(inputValue);
        // //grab the id
        // const id = inputValue.data.id;
        // // console.log('id ', id);
        // // console.log('data', data.post_file);
        // const formData = new FormData();
        // formData.append('files', data.post_file[0]);
        // formData.append('ref', 'post'); //name of content type
        // formData.append('refId', id); //id of content type
        // formData.append('field', 'images'); //name of key for the content type
        // const res = await axios({
        //     method: 'POST',
        //     url: 'http://ecom-mysql.api.bluejestic.local/upload',
        //     data: formData,
        //     // headers: {},
        // });
        // console.log('Success', res);
    } catch (error) {
        console.log(error);
    }
};
