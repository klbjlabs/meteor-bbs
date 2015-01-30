

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
