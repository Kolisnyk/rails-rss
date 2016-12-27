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
