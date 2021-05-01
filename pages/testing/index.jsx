import React from 'react';
import BannerAndButtons from '../../components/bluejestic/Cards/BannerAndButtons';
function Testing() {
    /*
    Props to pass
    bannerImage: string
    title: string
    subtitle: string
    secondaryTitle: string
    avatars: Array<string> (image srcs)
    buttonTextOne: string
    buttonTextTwo: string
    */
    return (
        <div>
            <BannerAndButtons
                bannerImage="https://images.unsplash.com/photo-1606980200407-fcaf54079f7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80"
                title="Travel"
                subtitle="232k members"
                secondaryTitle="17 friends are members"
                buttonTextOne="Join"
                buttonTextTwo="View"
                avatars={[
                    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                ]}
            />
        </div>
    );
}

export default Testing;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const FileUpload = () => {
//     const { register, handleSubmit } = useForm();

//     const submitData = async (data) => {
//         try {
//             //Since we need the id of the post before we can create the picture, we will create it and the use the id from axios to create it's picture
//             const token = process.env.NEXT_PUBLIC_STRAPI_JWT_TOKEN;
//             //since axios need an object
//             const formDataToSend = {
//                 title: data.title,
//                 message: data.message,
//             };
//             const inputValue = await axios({
//                 url: 'http://ecom-mysql.api.bluejestic.local/posts',
//                 method: 'POST',
//                 data: formDataToSend,
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             //grab the id
//             const id = inputValue.data.id;
//             console.log('id ', id);
//             console.log(data.file[0]);
//             const formData = new FormData();
//             formData.append('files', data.file[0]);
//             formData.append('ref', 'post'); //name of content type
//             formData.append('refId', id); //id of content type
//             formData.append('field', 'images'); //name of key for the content type
//             const res = await axios({
//                 method: 'POST',
//                 url: 'http://ecom-mysql.api.bluejestic.local/upload',
//                 data: formData,
//                 // headers: {
//                 //     Authorization: `Bearer ${token}`,
//                 // },
//             });
//             console.log('Success', res);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="FileUpload">
//             <form onSubmit={handleSubmit(submitData)}>
//                 <input
//                     name="file"
//                     type="file"
//                     ref={register({ required: true })}
//                 />
//                 <input
//                     type="text"
//                     ref={register({ required: true })}
//                     placeholder="title"
//                     name="title"
//                 />
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// };

// export default FileUpload;
