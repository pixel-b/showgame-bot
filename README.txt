**************************
*How to configure the bot*
**************************

1.) Get your twitch OAuth key from here: https://twitchapps.com/tmi/   
 a.)Make sure to keep this a secret!

2.) Get a steam API key from here: https://steamcommunity.com/dev/apikey 
 a.) When making it, it'll ask you to set a domain name, it doesn't matter, you can just spam your keyboard for a bit
 b.) Make sure to keep the API key a secret too!

3.) Grab your steamID64 from here: https://www.steamidfinder.com/
 a.) It should be the one that looks like '76561197960287930'


4. Right click the .env file you recieved and open it with Notepad


5. Fill in the reqired details, and save the .env file


6. Run the .exe file, and it should automatically connect to your chat!
 a.) If you are using the source version, run the bot with Node instead.



=================
=TROUBLESHOOTING=
=================

*It opens up something really quick and then closes!
You probably have something configured incorrectly, or the .env file in not in the same folder as the .exe
Check to make sure the brackets have been removed from the .env file too.

Also, when getting your OAuth key from that website, it gets it for whatever twitch account you're currently logged into.
If you're streaming on a different account, you may need to go to the link in a private browser so it lets you log in again.
Furthermore, OAuth tokens expire (usually after a year, but could be 30 days depending on how it's retrieved) so you may need to grab another if it stops working on you.



*The command doesn't work in chat!

Your Steam API key may have expired. Steam API keys expire 30 days since they were last used, so it shouldn't be a problem unless you take a large break from streaming.

Alternatively, double check to make sure you're using the right command. You can (possibly accidentally) change it on the .env file, so that could be a good place to look.
