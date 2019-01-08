import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    
    <div id="root"></div>

    <div class="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="5"></img>
        <h2>Referral Log</h2>
        <p class="lead">Below are the fields required for a referral. Completion can be done on your phone or computer.</p>
      </div>

      <div class="d-block mx-auto col-12 col-sm-5 ">
        <form class="form-horizontal">
          <div class="table-responsive">
              <table class="table table-bordered table-striped table-highlight">
                  <thead>
                      <th>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-info" 
                            data-toggle="popover" 
                            title="What is the..." 
                            data-content="Here we show you if your entry meets system requirements">
                            What is the...
                          </button>
                      </th>
                      <th>
                          <button type="button" class="btn btn-sm btn-info" data-toggle="popover" title="Fill this in!" 
                            data-content="Here we show you if your entry meets system requirements">
                            (fill in the blank)
                          </button>
                      </th>
                      <th>
                          <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                            data-content="Here we show you if your entry meets system requirements">
                            Valid
                          </button>
                      </th>
                  </thead>
                  <tbody>
                  
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Insured" 
                                data-content="What is the company name that will go on the proposal?">
                                Account Name
                              </button>
                          </td>
                          <td><input type="text" class="form-control" value=""/></td>
                          <td>
                              <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                                data-content=
                                  "It appears this field isn't valid because.. This is because of the text length. This is because we can't find any matches.">
                                Valid
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Branch Location" 
                                data-content="What branch will get credit for this account?">
                                Branch
                              </button>
                          </td>
                          <td><input type="text" class="form-control" value=""/></td>
                          <td>
                              <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                                data-content=
                                  "It appears this field isn't valid because.. the text length is too long. we can't find any matches in the database.">
                                Valid
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Effective" 
                                data-content="What date will this insurance policy become effective?">
                                Effective Date
                              </button>
                          </td>
                          <td><input type="text" class="form-control" value=""/></td>
                          <td>
                              <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                                data-content=
                                  "It appears this field isn't valid because.. the text length is too long. we can't find any matches in the database.">
                                Valid
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Quote" 
                                data-content="What date did you send the proposal to the broker/insured?">
                                Quote Date
                              </button>
                          </td>
                          <td><input type="text" class="form-control" value=""/></td>
                          <td>
                              <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                                data-content=
                                  "It appears this field isn't valid because.. the text length is too long. we can't find any matches in the database.">
                                Valid
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Segment" 
                                data-content="What division does this account belong to?">
                                Segment
                              </button>
                          </td>
                          <td><input type="text" class="form-control" value=""/></td>
                          <td>
                              <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                                data-content=
                                  "It appears this field isn't valid because.. the text length is too long. we can't find any matches in the database.">
                                Valid
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Industry" 
                                data-content="What industry does this insured belong to?">
                                Industry Group
                              </button>
                          </td>
                          <td><input type="text" class="form-control" value=""/></td>
                          <td>
                              <button type="button" class="btn btn-sm btn-danger" data-toggle="popover" title="Valid Entry?" 
                                data-content=
                                  "It appears this field isn't valid because.. the text length is too long. we can't find any matches in the database.">
                                Valid
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Status" 
                                data-content="How far along the quoted process are you in Aces?">
                                Aces Status
                              </button>
                          </td>
                          <td>
                              <select class="form-control">
                                  <option>Bound</option>
                                  <option>Declined</option>
                                  <option>Non-Renewal</option>
                                  <option>Pending</option>
                                  <option>Pre-Renewal</option>
                                  <option>Quoted</option>
                                  <option>Quoted-Lost</option>
                                  <option>Working</option>
                            </select>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <button type="button" class="btn btn-sm btn-light" data-toggle="popover" title="Renew?" 
                                data-content="Is this account new to our division?">
                                Renewal
                              </button>
                          </td>
                          <td>
                            <select class="form-control">
                                <option>New</option>
                                <option>Renewal</option>
                          </select>
                        </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </form>

      </div>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2018 CGC Analytics</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="http://uatunderwrite.aceins.com/globalCasualty">Privacy</a></li>
          <li class="list-inline-item"><a href="http://uatunderwrite.aceins.com/globalCasualty">Terms</a></li>
          <li class="list-inline-item"><a href="http://uatunderwrite.aceins.com/globalCasualty">Support</a></li>
        </ul>
      </footer>
    </div>
  </header>
      

  </div>

    );
  }
}

export default App;
