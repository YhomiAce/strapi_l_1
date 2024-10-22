module.exports = {
    routes: [
        {
            method: 'GET',
            path: "/hello",
            handler: 'landing-page.hello',
            config: {
                auth: false
            }
        }
    ]
}