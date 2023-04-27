const loadData = function ( data ) {
  this.data = data
    .sum( d => Math.sqrt( d.comment_count ))
    .sort( function ( a, b ) {
      return Math.sqrt(b.comment_count) - Math.sqrt(a.comment_count);
    });

  console.log( "treemap data", this.data );
  this.parent = this.data;
  this.view = this.data.children;
};

export {
  loadData
}