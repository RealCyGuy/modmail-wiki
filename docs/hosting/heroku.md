---
description: A cloud platform as a service.
---

# Deploying to Heroku

:::caution
Heroku is discontinuing its free plan on November 28th, 2022. Check [hosting](/hosting) for other options.
:::

Click this button to create a heroku app:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kyb3r/modmail)

1. Choose any name for your app. Note: this name doesn't matter at all.

2. Put your [bot's token](https://github.com/kyb3r/modmail/wiki/Installation#creating-a-bot-account) in the `TOKEN` field.

3. In the `DATABASE_TYPE` You may fillout: `mongodb`

4. Put the [ID of your Server](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) into the `GUILD_ID` field.

5. Put your own ID in the `OWNERS` field. If there are multiple owners, separate them by a comma: `180314310298304512, 355790471219511297, 325012556940836864`.

6. Put your Mongo connection URI from the previous section in the `CONNECTION_URI` field.

7. Put the `github token` you just created in the `GITHUB_TOKEN` field.

8. Put the URL of your log viewer Heroku app (`https://yourlogviewerappname.herokuapp.com`) in the `LOG_URL` field.

9. Click the `deploy app` button and wait for it to finish.

10. Click `Manage App` and go into the `Resources` tab, where you need to turn on the worker by clicking the pencil icon next to it.

11. If you want, you can go over and check the application logs to see if everything is running smoothly. If any unexpected errors pop up, join our [Discord server](https://discord.gg/etJNHCQ) and DM Modmail. The support members will help you figure out the issue and show you how to fix it.

12. Once the bot is online in your server,
make sure to give it `Manage Channels`, `Manage Messages` and `View Audit Logs` permissions. If your bot is not online, recheck the previous steps above.

13. Do the `?setup` command and you are good to go!
