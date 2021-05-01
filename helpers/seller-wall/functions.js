import axios from 'axios';
import moment from 'moment';
export let helpers = {};

helpers.convertTime = function (d) {
    let date = moment(d).format('LLL');
    let postTime = moment(d);
    let currentTime = moment();
    let hourDiff = currentTime.diff(postTime, 'hours');
    let minDiff = currentTime.diff(postTime, 'minutes');

    return {
        date,
        hourDiff,
        minDiff,
    };
};

helpers.publishPost = async function (data) {
    try {
        //Since we need the id of the post before we can create the picture, we will create it and the use the id from axios to create it's picture
        const token = process.env.NEXT_PUBLIC_STRAPI_JWT_TOKEN;
        //since axios need an object
        const formDataToSend = {
            title: data.title,
            message: data.message,
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

        //grab the id
        const id = inputValue.data.id;
        // console.log('id ', id);
        // console.log('data', data.post_file);
        const formData = new FormData();
        formData.append('files', data.post_file[0]);
        formData.append('ref', 'post'); //name of content type
        formData.append('refId', id); //id of content type
        formData.append('field', 'images'); //name of key for the content type
        const res = await axios({
            method: 'POST',
            url: 'http://ecom-mysql.api.bluejestic.local/upload',
            data: formData,
            // headers: {},
        });
        console.log('Success', res);
    } catch (error) {
        console.log(error);
    }
};

helpers.getWallPosts = async function () {
    console.log('getWallPosts fired');
    const data = await axios({
        url: 'http://ecom-mysql.api.bluejestic.local/graphql',
        // url: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT,
        method: 'post',
        data: {
            query: `
      query {
        posts {
            createdAt
            creation_date
            message
            title
            id
            likes_count
            comments {
                comment
                createdAt
            }
            images {
                id
                name
                url
            }
        }
    }
        `,
        },
    });

    return data.data;
};
