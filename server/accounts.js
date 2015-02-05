Accounts.onCreateUser(function(options,user){

    console.log("user.services.github.email");

    if (options.profile) {
      user.profile = options.profile;
    }   

    console.log("copy profile from github");
    user.profile.github = {}; 
    user.profile.github.accessToken = user.services.github.accessToken;
    user.profile.github.email = user.services.github.email;
    user.profile.github.username = user.services.github.username;

    var email = user.services.github.email;
    var options = { 
      secure: true // choose between `http://www.gravatar.com` 
                 //            and `https://secure.gravatar.com`
                 //            default is `false`
    }; 

				var md5Hash = Gravatar.hash(email);
				// 5658ffccee7f0ebfda2b226238b1eb6e

				var url = Gravatar.imageUrl(email, options);
				// https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e

				var url2 = Gravatar.imageUrl(md5Hash, options);
				// https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e

    user.profile.github.avatar_url = url2; 
    user.profile.figureUrlAt50 = url2;

    return user;
});

/*
ServiceConfiguration.configurations.remove({
  service: "qq"
}); 

ServiceConfiguration.configurations.insert({
  service: "qq",
  clientId: "101190427",
  scope:'basic',
  secret: "cfea0f3d50e2abf29a00f30a8db925f0"
}); 

console.log("Service qq login inserted in server/account.js ");

*/
