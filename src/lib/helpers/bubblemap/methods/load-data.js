import * as h from "../helpers.js";

const loadData = function ( data ) {
  this.data = data
  console.log( "bubblemap data", this.data );
  this.indexHierachy();

  this.subroot = this.data;
  this.isTopLevel = true;
  
  this.view = new Set();
  for ( const node of this.subroot.descendants() ) {
    if ( node.data.subreddit != null ) {
      this.view.add( node );
    }
  }
  
  this.subview = this.view;
  this.labels = h.pluckLabels( this.subroot );
  this.neighbors = [];
};

export { loadData }