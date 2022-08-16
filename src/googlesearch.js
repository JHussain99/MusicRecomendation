function loadClient() {
  gapi.client.setApiKey("AIzaSyBid94FBMzIPW8QIdiFUO-uYHkEN39r_Vw");
  return gapi.client
    .load(
      "https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest"
    )
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded before calling this method.
function execute() {
  return gapi.client.search.cse.list({}).then(
    function (response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function (err) {
      console.error("Execute error", err);
    }
  );
}
gapi.load("client");
<div>
  <button onclick="loadClient()">load</button>
  <button onclick="execute()">execute</button>
</div>;

export default loadClient();
