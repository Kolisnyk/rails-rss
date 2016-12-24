var Posts = React.createClass({
  render: function() {
    var posts = this.props.data.map(function(posts){
      return <Post {...posts} />
    });

    return <ul className="accordion" data-accordion key={this.props.id}>
        {posts}
      </ul>
  },
})

var Post = React.createClass({
  render: function() {
    return <li key={this.props.id} className="accordion-navigation">
      <a href={'#post_' + this.props.id}>{this.props.title}</a>
      <div id={'post_' + this.props.id} className="content active">

        <p>
          {this.props.description}
        </p>

        <a href={this.props.link} target="_blank" className="button tiny"><i className="fi-link"></i></a>
        &nbsp;&nbsp;

        <span className="date">{this.props.date}</span>
      </div>
    </li>
  }
})