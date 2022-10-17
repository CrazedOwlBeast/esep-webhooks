const https = require('https');

exports.handler = async (event) => {
    // TODO implement
    //console.log(event.issue.html_url);
    
    const options = {
        hostname: "",
        path: "",
        method: "POST"
    }

    const req = https.request(options, (res) => {
        res.on('data', (chunk)=>{
            console.log(chunk);
        })
    });
    let data = {
        text: "Issue Created: " + event.issue.html_url
    };
    req.write(JSON.stringify(data));
    req.end();
    const response = {
        statusCode: 200,
        body: "worked"
    };
    
    return response;
};
