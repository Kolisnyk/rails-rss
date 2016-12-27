var Feed = React.createClass({

  render: function() {
    return <li key={this.props.id}>
      <div className="card">
        <div className="image">
        </div>

        <div className="content">
          <span className="title">{this.props.title}</span>
          <br/>

          <strong>Query:</strong> {this.props.query}
          <br/>

          <strong>Base URL:</strong> {this.props.base_url}
          <br/><br/>
        </div>

        <div classNameName="action">
          <div classNameName="row">
            <div className="columns small-12">
              <a href={'/feeds/' + this.props.id} className="button tiny">
                <i className="fi-link"></i>
              </a>

              <a href={'/feeds/' + this.props.id + '/edit'} className="button tiny">
                <i className="fi-pencil"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </li>
  }
})
