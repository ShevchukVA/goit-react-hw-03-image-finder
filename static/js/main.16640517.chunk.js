(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports=a(65)},3:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=a(8),m=a(4),u=a(5),i=a(7),s=a(6),g=(a(3),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInput=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("label",null,r.a.createElement("input",{className:"SearchForm-input",onChange:this.handleInput,value:e,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}))))}}]),a}(n.Component)),h=a(19),p=a.n(h),d=(a(47),function(){return r.a.createElement(p.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})});d.defaultProps={type:"Audio",color:"000000",height:80,width:80};var f=d,v=function(e){return r.a.createElement("div",null,e)};v.defaultProps={massage:"Whoops, something went wrong"};var y=v,b=function(e){var t=e.name,a=e.urlToImg,n=e.urlToLargeImg,o=e.onUpdateImg;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:a,alt:t,className:"ImageGalleryItem-image",onClick:function(){return o(n)}}))};b.defaultProps={name:"picture",urlToImg:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",urlToLargeImg:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"};var E=b,I=function(e){var t=e.images,a=e.onUpdateImages;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){var t=e.id,n=e.tags,o=e.webformatURL,l=e.largeImageURL;return r.a.createElement(E,{key:t,name:n,urlToImg:o,urlToLargeImg:l,onUpdateImg:a})})))};I.defaultProps={tags:"picture",webformatURL:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",largeImageURL:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"};var w=I,S=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Overlay",onClick:function(t){t.target===t.currentTarget&&e.props.onCloseModal()}},r.a.createElement("div",{className:"Modal"},this.props.children))}}]),a}(n.Component),U=function(e){var t=e.onUpdateButton;return r.a.createElement("button",{type:"button",className:"Button",onClick:t},"Load more")},k=a(20),O=a.n(k),j=function(e,t){var a="?q=".concat(e,"&page=").concat(t,"&key=").concat("18661851-33f15e0f8577d5b4d35fae430","&image_type=photo&orientation=horizontal&per_page=12");return O.a.get("https://pixabay.com/api/"+a).then((function(e){return e.data.hits}))},N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,page:1,searchQuery:"",error:null,largeImgUrl:null},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),j(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.handleLargeImg=function(t){e.setState({largeImgUrl:t})},e.handleCloseModal=function(){return e.setState({largeImgUrl:null})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.images,r=a.searchQuery;t.searchQuery!==r&&this.fetchImages(),t.images.length!==n.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.error,o=e.largeImgUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},n&&r.a.createElement(y,{message:"Whoops, something went wrong: ".concat(n.message)}),r.a.createElement(g,{onSubmit:this.handleSearchFormSubmit}),t.length>0&&r.a.createElement(w,{images:t,onUpdateImages:this.handleLargeImg}),o&&r.a.createElement(S,{onCloseModal:this.handleCloseModal},r.a.createElement("img",{className:"Modal-img",src:o,alt:"largeImage"}))),r.a.createElement("div",{className:"Button-box"},a&&r.a.createElement(f,null),t.length>0&&!a&&r.a.createElement(U,{onUpdateButton:this.fetchImages})))}}]),a}(n.Component);l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.16640517.chunk.js.map