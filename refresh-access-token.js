const { CommunicationIdentityClient} = require('@azure/communication-identity');


const main = async () => {
    console.log("Azure Communication Services - Access Tokens Quickstart")

  // This code demonstrates how to fetch your connection string
// from an environment variable.
const connectionString = "<YOUR ACS CONNECTIONSTRING>";

// Instantiate the identity client
const identityClient = new CommunicationIdentityClient(connectionString);

/////////Taking the 1st existing user ID and creating a new CommunicationUserIdentifier object////////
const existingCommunicationUserId1 = "<YOUR FIRST USER>"; //replace this with userID
const newCommunicationUserIdentifier1 = {
    communicationUserId : existingCommunicationUserId1
};
console.log(`\nModifying identity token for ID: ${newCommunicationUserIdentifier1.communicationUserId}`);

//Get a new token for the 1st existing Identity user
let tokenResponse1 = await identityClient.getToken(newCommunicationUserIdentifier1, ["voip"])
console.log(`\nIssued an access token with 'voip' scope that expires at ${tokenResponse1.expiresOn}:`);
console.log(tokenResponse1.token);

///////Taking the 2nd existing user ID and creating a new CommunicationUserIdentifier object/////////
const existingCommunicationUserId2= "<YOUR SECOND USER>"; //replace this with userID
const newCommunicationUserIdentifier2 = {
    communicationUserId : existingCommunicationUserId2
};
console.log(`\nModifying identity token for ID: ${newCommunicationUserIdentifier2.communicationUserId}`);

//Get a new token for existing Identity user
let tokenResponse2 = await identityClient.getToken(newCommunicationUserIdentifier2, ["voip"])
console.log(`\nIssued an access token with 'voip' scope that expires at ${tokenResponse2.expiresOn}:`);
console.log(tokenResponse2.token);

};

main().catch((error) => {
  console.log("Encountered an error");
  console.log(error);
})
