# 0x01. ES6 Promises
0. Return a Promise using this prototype function <code>getResponseFromAPI()</code> <br />
1. Using the prototype below, return a promise. The parameter is a boolean.<br />
2. Append three handlers to the function:
<br />
When the Promise resolves, return an object with the following attributes:<br />
<ul>
<li> status: 200</li>
<li>body: success</li>
<li>When the Promise rejects, return an empty Error object</li>
<li>For every resolution, log Got a response from the API to the console</li>
</ul>
<br />
3. Handle multiple successful promises <br />