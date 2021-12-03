(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1Wpa6",label:"ContactForm_label__UybND",input:"ContactForm_input__3l6ME",button__wrapper:"ContactForm_button__wrapper__1iEEd",button:"ContactForm_button__3CYRw"}},function(t,e,n){t.exports={item:"ContactItem_item__TT_w5",name:"ContactItem_name__12BX2",number:"ContactItem_number__1uTc3",button:"ContactItem_button__23lIr"}},,,function(t,e,n){t.exports={title:"App_title__1TXc1"}},,,,function(t,e,n){t.exports={label:"Filter_label__2ZoDN",input:"Filter_input__2DH4l"}},,function(t,e,n){t.exports={container:"Container_container__2nEOA"}},,function(t,e,n){t.exports={list:"ContactList_list__1vGnu"}},,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=n(15),i=n(4),l=n(5),u=n(8),m=n(7),b=n(12),d=n.n(b),h=n(0),p=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})};p.defaultProps={children:[]};var j=p,f=n(13),_=n(23),C=n(2),O=n.n(C),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hanldeChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.hanldeSubmit=function(e){e.preventDefault();var n={id:Object(_.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({id:"",name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:O.a.form,onSubmit:this.hanldeSubmit,children:[Object(h.jsxs)("label",{className:O.a.label,children:["Name",Object(h.jsx)("input",{className:O.a.input,type:"text",name:"name",value:this.state.name,onChange:this.hanldeChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(h.jsxs)("label",{className:O.a.label,children:["Number",Object(h.jsx)("input",{className:O.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.hanldeChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(h.jsx)("div",{className:O.a.button__wrapper,children:Object(h.jsx)("button",{type:"submit",className:O.a.button,children:"Add contact"})})]})}}]),n}(a.Component),v=x,N=n(10),g=n.n(N),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",className:g.a.input,value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})};y.defaultProps={value:""};var w=y,A=n(3),F=n.n(A),S=function(t){var e=t.contact,n=t.onDeleteContact;return Object(h.jsxs)("li",{className:F.a.item,children:[Object(h.jsxs)("span",{className:F.a.name,children:[e.name,": "]}),Object(h.jsx)("a",{href:"tel:".concat(e.number),className:F.a.number,children:e.number}),Object(h.jsx)("button",{className:F.a.button,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})},D=n(14),k=n.n(D),z=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:k.a.list,children:e.map((function(t){return Object(h.jsx)(S,{contact:t,onDeleteContact:n},t.id)}))})},Z=n(6),E=n.n(Z),I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already on contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(o.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{className:E.a.title,children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:E.a.title,children:"Contacts"}),Object(h.jsx)(w,{value:t,onChange:this.changeFilter}),Object(h.jsx)(z,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),T=I;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.b83b4e83.chunk.js.map