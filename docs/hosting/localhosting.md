---
description: Hosting on your computer or a VPS.
sidebar_position: 0
---

# Local Hosting

Original credit to [Taaku18](https://taaku18.github.io/)'s [guide](https://taaku18.github.io/modmail/local-hosting/).

1. Follow the installation guide: [https://github.com/kyb3r/modmail/wiki/Installation](https://github.com/kyb3r/modmail/wiki/Installation). Skip the last step (you still need Heroku to deploy your log viewer if you want this feature).

    - This step creates a Discord bot and obtains a MongoDB account, both are mandatory.
    - You may choose to not sign up for Heroku thus have no log viewer, if this applies to you, in step 3, set `LOG_URL=https://example.com`.

2. Download the zip archive of Modmail: [https://github.com/kyb3r/modmail/archive/master.zip](https://github.com/kyb3r/modmail/archive/master.zip) and unzip.

    - For more sophisticated users, you may choose to use `git` to download the latest version of Modmail (`git clone https://github.com/kyb3r/modmail`)

3. Open `.env.example` in the Modmail unarchived directory (folder) with your favorite text editor, edit in the different values.

    - `TOKEN=` your [bot’s token](https://github.com/kyb3r/modmail/wiki/Installation#22-obtain-a-token).
    - `LOG_URL=` the URL of your log viewer Heroku app (ie. [https://yourlogviewerappname.herokuapp.com](https://yourlogviewerappname.herokuapp.com)).
    - `GUILD_ID=` the [ID of the server](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) your bot operates in.
    - `OWNERS=` your user ID (ie. `OWNERS=9821302031291298`, or if multiple owners, `OWNERS=9821302031291298,9781239213813229,924822913921391`).
    - `MONGO_URI=` your Mongo connection URI from the [MongoDB setup](https://github.com/kyb3r/modmail/wiki/Configure-Modmail-and-Logviewer#obtaining-a-connection-string).
    - Together, they should resemble something similar to the original `.env.example` file.
    - Save the file as `.env`.

4. Download Python and set up Python from official Python download page: [https://www.python.org/downloads/](https://www.python.org/downloads/). The pre-installed Python on your local machine is usually out of date, you need the latest version of Python (3.7.3) for Modmail.

    - When completing the installation, be sure to choose “Add to PATH” (or similar).

5. Open your preferred console.

    - MacOS or Linux users, the default is _Terminal_.
    - Windows users, the default is _cmd_ (Command Prompt).

6. Depending where you stored the Modmail directory (folder), for example desktop (`path` > `to` > `desktop`), type one of the following (depends if you used git or not):

        cd path/to/desktop/modmail-master
        cd path/to/desktop/modmail

7. Install the requirements.

    - MacOS or Linux users, type in the following:

          pip3.7 install pipenv && pipenv install

    - Windows users, type in the following:

          py -3.7 -m pip install pipenv && py -3.7 -m pipenv install

8. Start the Modmail.

    - MacOS or Linux users, type in the following:

          pipenv run python3.7 bot.py

    - Windows users, type in the following:

          py -3.7 -m pipenv run python bot.py

9. Your Modmail bot should now be up and running, if you’re experiencing issues, join our [Discord server](https://discord.gg/5cttdfY) and we’ll help you sort things out!
