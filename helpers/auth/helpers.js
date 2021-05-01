let helpers = {};

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
        console.log('helpers login() data => ', data);
        if (data.message) {
            throw data.message[0].messages[0].message;
        } else {
            return data;
        }
    } catch (err) {
        return err;
    }
};

export { helpers };
