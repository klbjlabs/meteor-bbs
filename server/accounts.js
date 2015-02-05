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
    user.profile.github.avatar_url = user.services.github.avatar_url;

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
