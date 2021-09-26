import './App.css';



function App() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const keys = urlParams.keys();
  var shortLink = "";
  var foundLink = false;
  for (const key of keys) {
      console.log(key);
      shortLink = key;
      break;
  }
  console.log(shortLink);
  if (shortLink === "") {
      var showNotFoundHeader = false;
  } else {
    var showNotFoundHeader = true;
  }

  return (
    <div>      
        <div>

          <div class="box" id="startHeader">
              <h1>j1b.site </h1>
          </div>

          <div class="box" id="addShortcutHeader" hidden={true}>
              <h1>Add new shortcut</h1>
          </div>


          <div class="box" id="notFoundHeader" hidden={!showNotFoundHeader}>
              <h1>Shortcut&nbsp;</h1>
              <h1 style={{color: "red"}}>{shortLink}</h1>
              <h1>&nbsp;Not Found</h1>
          </div>


          <br/>
          <br/>

          <div>
            <form>
              <div>Shortcut: <input type="text" id="newShortcut"/></div>
              <div>Destination URL: <input type="text" id="newURL"/></div>
              <div>Password: <input type="text" id="password"/></div>
            </form>
          </div>

          <button id="addButton">Add</button>


          <br/>

          <pre class="terminal" id="terminal5"></pre>
          <pre class="terminal" id="terminal4"></pre>
          <pre class="terminal" id="terminal3"></pre>
          <pre class="terminal" id="terminal2"></pre>
          <pre class="terminal" id="terminal1"></pre>

          <br/>
          <br/>
          <div>
              <h4>j1b.site</h4>        
              <div>
                  <p style={{}}>Link Shortener </p> 
                  <p class="grey">©JohannesBrandenburger</p>
              </div>
          </div>
          </div>




    </div>
  );
}

export default App;
