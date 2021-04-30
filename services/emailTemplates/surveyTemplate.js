const keys = require('../../config/keys');

module.exports = survey => {
    return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>We'd love your input!</h3>
                <p>Please answer the following quick question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/response">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/response">No</a>
                </div>
            </div>
        </body>
    </html>
    `;
};