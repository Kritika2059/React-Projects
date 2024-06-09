import Newweb from "./newweb"

function App() {

  const username = "inserting variables"
  return (
  //normal tags will create error = it must be inside div
  // or it can be inside a fragment i.e.  <> </>  only
 
  <>
  <Newweb/>
 <h3>h3 tag open</h3>
 <p>paragraph tag open NOW :: {username}</p>
  </>
  )                      //variables can be inserted using curly brakets{}
}

export default App
