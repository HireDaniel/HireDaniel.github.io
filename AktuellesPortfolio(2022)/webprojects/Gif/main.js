const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);


const compiledHtml = template(context);

const debateElement = document.getElementById('debate');

const context = {
  opinion: true
};

debateElement.innerHTML= compiledHtml;
