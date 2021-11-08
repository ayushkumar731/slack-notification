const SLACK_WEBHOOK_URL = 'WEBHOOK_URL';
const slack = require('slack-notify')(SLACK_WEBHOOK_URL);

class Slack {
  static sendSignsUpNotification = (user) => {
    slack.success({
      text: 'new user signup',
      attachments: [
        {
          fields: [
            { title: 'Name', value: user.name, short: true },
            { title: 'Email', value: user.email, short: true },
          ]
        }
      ]
    });
  }
}
module.exports = Slack;