SystemUtil.Run "chrome.exe", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("username").Set "Admin" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("password").SetSecure "633ff39a05c17957976bae2c6a1c4458f2e4527288e8" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
